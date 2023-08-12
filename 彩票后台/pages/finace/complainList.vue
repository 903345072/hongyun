<template>
	<view>
		<bar-title bgColor="bg-white" :isBack="true" >
			<block slot="content">投诉记录</block>
		</bar-title>
		
		<scroll-view scroll-y="true">
			<view style="background-color: #f8f8f8;">
				<view v-for="(item,index) in data">
					<view style="background-color: white;padding: 20rpx 20rpx;border-radius: 30rpx;margin: 20rpx 20rpx;line-height: 100rpx;">
						<view style="display: flex;">
							<text>投诉人:</text>
							<text style="margin-left: 20rpx;">{{item.u_name}}</text>
						</view>
						<view style="display: flex;">
							<text>联系方式:</text>
							<text style="margin-left: 20rpx;">{{item.account}}</text>
						</view>
						<view style="display: flex;">
							<text>投诉内容:</text>
							<text style="margin-left: 20rpx;">{{item.content}}</text>
						</view>
						<view >
							<text style="white-space: nowrap;">投诉图片</text>
							<view style="display: inline-block;padding: 10rpx 20rpx;"  v-for="(i,index) in item.photo" class="ddd">
							  <view style="position: relative;" @click="previews(item.photo,index)">
								  <image style="width: 80rpx;height: 80rpx;" :src="getSrc(i)"></image>
							  </view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
		import barTitle from '@/components/zaiui-common/basics/bar-title';
		import config from '@/api/interface.js'
	export default{
		name:"rank",
		components:{
			barTitle
		},
		data(){
			return {
				data:[],
				have:true,
			}
		},
		onLoad() {
			this.getList(0)
		},
		onReachBottom(){   
			this.getList(1)
		 },
		methods:{
			previews(data,index){
				var list = []
				for(let d in data){
					list.push(config.config.url+data[d])
				}
				
				uni.previewImage({
					current:index,
					urls:list,
					loop:true
				})
			},
			getSrc(item){
				return config.config.url+item
			},
			getList(flag){
				if(this.hava == false){
					return
				}
				if(flag == 0){
					this.pageNo = 1
				}
				if(flag == 1){
					this.pageNo++
				}
				var data = {"pageNo":this.pageNo,"pageSize":15}
				this.$api.getComplainList(data).then(res=>{
					
					if(flag == 0){
						this.data = res.data.dataList
					
					}else{
						if(res.data.dataList.length == 0){
							this.hava=false
						}
						this.data = this.data.concat(res.data.dataList)
					}
				})
			},
		}
	}
</script>

<style>
</style>
