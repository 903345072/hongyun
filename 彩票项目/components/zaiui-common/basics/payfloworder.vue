<template>
	<uni-popup ref="orderpop"  :mask-click="true" type="bottom"  background-color="#fff" style="z-index: 9999;height: 600rpx;" >
		<view @click="openorderpop()" class="cuIcon-roundclose" style="position: absolute;top: 35rpx; right: 35rpx;font-size: 40rpx;color: grey;"></view>
		<view style="min-height: 300rpx;padding: 40rpx 0;">
			<view style="display: flex;justify-content: center;color: grey;padding-bottom: 20rpx;border-bottom: 1px solid #EEEEEE;">
				<view style="color: #000000;">支付给店主</view>
				
			</view>
			<view style="padding: 20rpx 20rpx;">
				<view style="display: flex;justify-content: space-between;margin-bottom: 20rpx;">
					<view>是否上传票据</view>
					<view>
						<checkbox-group class="block" @change="CheckboxChange">
						<checkbox class='round red sm zaiui-checked' :class="is_upload?'checked':''"
						 :checked="is_upload?true:false" :value="is_upload?'1':'0'"/>
						</checkbox-group>
					</view>
				</view>
				<view style="display: flex;justify-content: space-between;margin-bottom: 20rpx;">
					<view>{{arr[game_type]}}</view>
					<view>{{amount}}.00元</view>
				</view>
				<view style="display: flex;justify-content: space-between;">
					<view>店铺余额</view>
					<view>{{this.shop_money >= amount?amount*-1+".00元":"预存不足"}}</view>
				</view>
				<view @click="goRecharge()" v-if="this.shop_money < amount" style="background-color: #007AFF;color: white;padding: 15rpx 200rpx;text-align: center;border-radius: 40rpx;margin-top: 20rpx;">预存入口1</view>
				<view @click="doorder()" v-if="this.shop_money >= amount" style="background-color: red;color: white;padding: 15rpx 200rpx;text-align: center;border-radius: 40rpx;margin-top: 20rpx;">立即支付</view>
				
			</view>
		</view>
	</uni-popup>
</template>

<script>
	export default{
		name:"payfloworder",
		
		data(){
			return{
				 arr:{"foot":"竞彩足球","bd":"北京单场","basket":"竞彩篮球","pl3":"排列三","pl5":"排列五"},
				 is_upload:false
			}
		},
	
		props:{
		
			shop_money:null,
			amount:null,
			game_type:{
				type:String,
				default:'foot'
			},
			mode:null,
			bei:null,
			id:null

		},
		methods:{
			CheckboxChange(){
				this.is_upload = !this.is_upload
			},
			goRecharge(){
				uni.navigateTo({
					url:"/pages/finace/recharge"
				})
			},
			doorder(){
			
				var data = {"id":this.id,"bei":this.bei,"is_upload":this.is_upload?1:0}
				this.$api.dofloworder(data).then(res=>{
					var str = encodeURIComponent(JSON.stringify(res.data))
					uni.navigateTo({
						url:"/pages/order/orderdetail?str="+str
					})
				})
			},
			openorderpop(){
				this.$emit("closeopendoor")
			}
		}
	}
</script>

<style>
</style>
