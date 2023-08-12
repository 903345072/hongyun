<template>
	<view>
		<bar-title bgColor='bg-white' >
			<block slot="content">他的邀请</block>
		</bar-title>
		
		 <view class="content" >
			 <view v-if="mask" style="position: fixed;left: 0;right: 0;bottom: 0;top: 0;background: rgba(0, 0, 0, 0.4);z-index: 999;">123</view>
			 <z-paging style="margin-top: 101rpx;" :refresher-only="false" ref="paging" @onRefresh="onRefresh" :refresher-status.sync="refresherStatus" @scrolltolower="scrolltolower">
				 <view style="width: 100%;display: flex;justify-content: center;">
				 	<view class="search-bar">
				 					 <view class="search-bar-box">
				 					<view class="cuIcon-search search-span"></view>
				 					 <input @blur="searchUser()" v-model="user"  placeholder="请输入用户昵称或者手机号" class="search-text"  focus/>
				 					
				 					 </view>
				 	</view>
				 </view>
				 
				 <view v-if="is_seller">
					 <view @click="showXfRank()">
					 					 <view style="font-weight: bold;margin: 20rpx 20rpx;">今日，销售业绩排行(元)</view>
					 					 <view style="display: flex;justify-content: space-around;align-items: center;">
					 						 <view v-for="item in xf_rank" style="display: flex;flex-direction: column;justify-content: center;align-items: center;">
					 							 <view>
					 								 <image style="width: 60rpx;height: 60rpx;border-radius: 60rpx;" :src="getSrc(item.avatar)"></image>
					 							 </view>
					 							 <view>
					 								 {{item.real_name.length>4?item.real_name.substring(0,4):item.real_name}}
					 							 </view>
					 						 </view>
					 						 <view class="cuIcon-right">
					 							 
					 						 </view>
					 					 </view>
					 </view>
					 
					 
					 <view @click="showRegRank()">
					 					 <view style="font-weight: bold;margin: 20rpx 20rpx;">今日，销售邀请排行(人)</view>
					 					 <view style="display: flex;justify-content: space-around;align-items: center;">
					 						 <view v-for="item in reg_rank" style="display: flex;flex-direction: column;justify-content: center;align-items: center;">
					 							 <view>
					 								 <image style="width: 60rpx;height: 60rpx;border-radius: 60rpx;" :src="getSrc(item.avatar)"></image>
					 							 </view>
					 							 <view>
					 								 {{item.real_name.length>4?item.real_name.substring(0,4):item.real_name}}
					 							 </view>
					 						 </view>
					 						 <view class="cuIcon-right">
					 							 
					 						 </view>
					 					 </view>
					 </view>
				 </view>
				 
				 <view style="display: flex;align-items: center;margin: 30rpx 30rpx;">
				 	<view v-if="TabCur==0" style="flex: 2;">
						<view>共邀请: <text style="color: red;font-size: 32rpx;">{{count}}</text>个客户</view>
						<!-- <view>共充值: <text style="color: red;font-size: 32rpx;">{{total_recharge}}</text>元</view>
						<view>共提现: <text style="color: red;font-size: 32rpx;">{{total_withdraw}}</text>元</view> -->
					</view>
				 	<view v-if="TabCur==1" style="flex: 2;">投注金额: <text style="color: red;font-size: 32rpx;">{{bet_amount}}</text>元</view>
				 	<view style="flex: 3;" class="example-body">
				 				<uni-datetime-picker v-model="range" @change="change($event)" type="datetimerange" @maskClick="maskClick" />
				 			</view>
				 </view>
				 
				 <view style="z-index: 0;position: sticky;top :100;">
				 	<tabs-view @change="tabsChange" :current="current" :items="tabList"></tabs-view>
				 </view>
				 
				 <swiper :duration="100" class="swiper" :style="[{height:swiperHeight+'px'}]" :current="current" @animationfinish="animationfinish">
				 
					
					<swiper-item class="swiper-item" style="height: 100%;">
						<registerList @updateCount="updateCount"  :range="range" :name="tabList[current]" :type="0" :uid="uid" style="height: 100%;" ref="swiperList0" :tabIndex="0" :currentIndex="current" @heightChanged="heightChanged">
						</registerList>
					
					</swiper-item>
					
					<swiper-item class="swiper-item" style="height: 100%;">
						
						<betList @updateBetAmount="updateBetAmount"  :range="range"  :name="tabList[current]" :type="1" :uid="uid" style="height: 100%;" ref="swiperList1" :tabIndex="1" :currentIndex="current" @heightChanged="heightChanged">
						</betList>
					</swiper-item>
				 </swiper>
			 </z-paging>
		 </view>	
		  
		<uni-popup ref="xf"   :mask-click="false" type="center"  background-color="#fff" style="z-index: 999999;height: 600rpx;border-radius: 100rpx;" >
			<view style="padding: 15rpx 20rpx;">
			     <view style="text-align: center;">
					 <view style="font-weight: bold;">今日，销售业绩排行</view>
					 <view @click="cancel_(1)" style="position: absolute;top: 20rpx;right: 20rpx;" class="cuIcon-close"></view>
				 </view>
				<view v-for="(item,index) in xf_rank" :key="index" style="display: flex;flex-direction: column;padding: 30rpx 20rpx;">
					<view style="display: flex;align-items: center;justify-content: space-between;">
						<view style="display: flex;align-items: center;">
							<view>
								{{index+1}}
							</view>
							<view style="margin: 0 20rpx;">
								 <image style="width: 60rpx;height: 60rpx;border-radius: 60rpx;" :src="getSrc(item.avatar)"></image>
							</view>
							
							<view>
								{{item.real_name}}
							</view>
						</view>
						
						<view style="margin-left: 170rpx;">
							￥{{item.today_child_xf}}
						</view>
					</view>
					
					
				</view>
			</view>
		</uni-popup>
		
		
		<uni-popup ref="reg"   :mask-click="false" type="center"  background-color="#fff" style="z-index: 999999;height: 600rpx;border-radius: 100rpx;" >
			<view style="padding: 15rpx 20rpx;">
			     <view style="text-align: center;">
					 <view style="font-weight: bold;">今日，销售邀请排行</view>
					 <view @click="cancel_(2)" style="position: absolute;top: 20rpx;right: 20rpx;" class="cuIcon-close"></view>
				 </view>
				<view v-for="(item,index) in reg_rank" :key="index" style="display: flex;flex-direction: column;padding: 30rpx 20rpx;">
					<view style="display: flex;align-items: center;justify-content: space-between;">
						<view style="display: flex;align-items: center;">
							<view>
								{{index+1}}
							</view>
							<view style="margin: 0 20rpx;">
								 <image style="width: 60rpx;height: 60rpx;border-radius: 60rpx;" :src="getSrc(item.avatar)"></image>
							</view>
							
							<view>
								{{item.real_name}}
							</view>
						</view>
						
						<view style="margin-left: 170rpx;">
							{{item.today_child_register}}人
						</view>
					</view>
					
					
				</view>
			</view>
		</uni-popup>
	</view>
	
	
</template>

<script>
	import barTitle from '@/components/zaiui-common/basics/bar-title';
	import registerList from '@/components/zaiui-common/user/registerList';
	import betList from '@/components/zaiui-common/user/betList';
	import config from '@/api/interface.js'
	export default{
		name:"InvitedUser",
		components:{
			barTitle,registerList,betList,config
		},
		onLoad(option) {
			this.$api.getChildData({}).then(res=>{
				this.is_seller = res.data.is_seller
				this.xf_rank = res.data.today_child_xf
				this.reg_rank = res.data.today_child_register
			})
		},
		data(){
			return {
				count:0,
				total_recharge:0,
				total_withdraw:0,
				bet_amount:0,
				uid:"",
				user:"",
				maskClick:false,
				range: [],
				tabList: [
					'注册数据',
				'投注数据'
				],
				TabCur: 0,
				refresherStatus: 0,
				swiperHeight: 0,
		
				current: 0, // tabs组件的current值，表示当前活动的tab选项
				is_seller:false,
				xf_rank:[],
				reg_rank:[],
				mask:false
			}
		},
		methods:{
			cancel_(t){
				if(t == 1){
					 this.$refs.xf.close('center')
				}
				if(t == 2){
					 this.$refs.reg.close('center')
				}
				this.mask = false
			},
			showXfRank(){
				this.mask = true
				this.$refs.xf.open('center')
			},
			showRegRank(){
				this.mask = true
				this.$refs.reg.open('center')
			},
			getSrc(src){
				return config.config.url+src
			},
			updateCount(data){
				this.count = data.count
				this.total_recharge = data.total_recharge
				this.total_withdraw = data.total_withdraw
			},
			updateBetAmount(data){
				this.bet_amount = data
			},
			change(e){
			this.range = e
			if(this.current == 0){
				this.$refs.swiperList0.getList(e,this.user)
			}else{
				this.$refs.swiperList1.getList(e,this.user)
			}
			
				},
			searchUser(){
				if(this.current == 0){
					this.$refs.swiperList0.getList(this.range,this.user)
				}else{
						this.$refs.swiperList1.getList(this.range,this.user)
				}
				
			},
			tabChange(index) {
			            this.TabCur = index;
			        },
			swiperChange(e) {
					    let { current } = e.target;
					    this.TabCur = current;
			    },
				
				tabsChange(index) {
					this._setCurrent(index);
					
				},
				//下拉刷新时，通知当前显示的列表进行reload操作
				onRefresh(){
					this.$refs.swiperList[this.current].reload(() => {
						this.$refs.paging.complete([]);
					});
				},
				//当滚动到底部时，通知当前显示的列表加载更多
				scrolltolower(){
					if(this.current == 0){
						this.$refs.swiperList0.doLoadMore()
					}else{
							this.$refs.swiperList1.doLoadMore()
					}
				
				},
				// swiper滑动结束
				animationfinish(e) {
					let current = e.detail.current;
					this._setCurrent(current);
				},
				//设置swiper的高度
				heightChanged(height){
					if(height === 0){
						//默认swiper高度为屏幕可用高度-tabsView高度-slot="top"内view的高度
						height = uni.getSystemInfoSync().windowHeight - uni.upx2px(80);
					}
					this.swiperHeight = height;
				},
				_setCurrent(current){
				
					if (current !== this.current){
						//切换tab时，将上一个tab的数据清空
						if(current == 0){
							this.$refs.swiperList0.clear();
						}else{
							this.$refs.swiperList1.clear();
						}
						
					}
					this.current = current;
					this.TabCur = current
				}
		}
		
	}
</script>

<style>
	.search-bar{
	
		width: 95%;
		height: 70rpx;
		margin-top: 2%;
	
		background-color: #f4f4f4;
	
	}
	.search-bar-box{
			
		display: flex;
		align-items: center;
		margin: 0 auto;
		
		height: 70rpx;
		
		border-radius: 50rpx;
	}
	.search-span{
		width: 40rpx;
		height: 56rpx;
		margin-top: 30rpx;
		margin-left: 30rpx;
	}
	.search-text{
		width: 100%;
		margin-top: 10rpx;
		
		font-size: 30rpx;
		color: #7f7f81;
	}
	
	
</style>
