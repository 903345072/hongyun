<template>
	<view class="zaiui-news-box" :class="show?'show':''">
		<!--标题栏-->
		<bar-title bgColor="bg-white"  @rightTap="barTitleRightTap">
			<block slot="content">比分中心</block>
			
		</bar-title>
	
		
	
		
		<view ><web-view  style="top:26rpx"  :src="geturl()"></web-view></view>
		<view style="background-color: white;left: 0;right: 0;bottom: 0;position: fixed;z-index: 9999;height: 186rpx;"></view>
		
		<!--占位底部距离-->
		<view class="cu-tabbar-height"/>
	</view>
</template>

<script>
	import barTitle from '@/components/zaiui-common/basics/bar-title';
	
	import _tool from '@/static/zaiui/util/tools.js';	//工具函数
	export default {
		name: 'news',
		components: { 
			barTitle
		},
		data() {
			return {
				modalName: null, listTouchStart: 0, listTouchDirection: null,id:'',type:1,state:1
			}
		},
		onLoad(option) {
			this.id = option.id
			this.type = option.type
			this.state = option.state
		},
		props: {
			show: {
				type: Boolean,
				default: true
			},
			scrollY: {
				type: Number,
				default: 0
			},
			scrollBottom: {
				type: Number,
				default: 0
			}
		},
		watch: {
			scrollY() {
				//通知他妈的滚动了。
				this.setPageScroll(this.scrollY);
			},
			scrollBottom() {
				if(this.scrollBottom != 0) {
					//通知他妈的触底了
					this.setReachBottom();
				}
			},
		},
		created() {
			//加载虚拟数据
		},
		mounted() {
			_tool.setBarColor(true);
			uni.pageScrollTo({
			    scrollTop: 0,
			    duration: 0
			});
		},
		methods: {
			geturl(){
				if(this.state == 1){
					if(this.type==1){
						return "http://m.titan007.com/Analy/Analysis/"+this.id+".htm"
					}else{
						return "http://m.titan007.com/AnalyLq/Analysis/"+this.id+".htm"
					}
				}else{
					if(this.type==1){
						return "http://m.titan007.com/"
					}else{
						return "http://m.titan007.com/basketball.shtml"
					}
				}
				
			},
			//页面被滚动
			setPageScroll(scrollTop) {
				//console.log(scrollTop);
			},
			//触底了
			setReachBottom() {
				console.log('触底了');
			},
			barTitleRightTap() {
				console.log('标题栏右边被点击');
			},
			// ListTouch触摸开始
			ListTouchStart(e) {
				this.listTouchStart = e.touches[0].pageX
			},
			// ListTouch计算方向
			ListTouchMove(e) {
				this.listTouchDirection = e.touches[0].pageX - this.listTouchStart > 0 ? 'right' : 'left'
			},
			// ListTouch计算滚动
			ListTouchEnd(e) {
				if (this.listTouchDirection == 'left') {
					this.modalName = e.currentTarget.dataset.target
				} else {
					this.modalName = null
				}
				this.listTouchDirection = null
			},
			//被点击
			tapNews(index) {
				console.log(index);
				if(index == 0) {
					uni.navigateTo({
						url: '/pages/news/notice',
					});
				} else if (index == 1) {
					uni.navigateTo({
						url: '/pages/news/chat',
					});
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.zaiui-news-box {
		width: 100%;
		display: none;
		.zaiui-follow-box {
			.action-text-cut {
				width: 70%;
			}
		}
		.zaiui-grid-menu {
			.cu-list.grid.no-border>.cu-item {
				.cu-avatar {
					margin: 0 auto;
				}
			}
		}
		.zaiui-news-list-box {
			padding: 0 9.09rpx;
			.cu-list.menu-avatar>.cu-item>.cu-avatar {
				width: 81.81rpx;
				height: 81.81rpx;
			}
			.cu-list.menu-avatar>.cu-item {
				height: 163.63rpx;
				align-items: inherit;
				.cu-avatar {
					margin-top: 25.45rpx;
					.cu-tag.badge {
					    width: 21.81rpx;
					    height: 21.81rpx;
					    top: 0;
					    right: 0;
					    border: 1.81rpx solid #fff;	
					}
				}
				.content {
				    left: 136.36rpx;
					margin-top: 18.18rpx;
				    width: calc(100% - 90.9rpx - 54.54rpx - 18.18rpx);
				    line-height: 1.7em;	
					.cu-tag {
						padding: 0 3.63rpx;
						text {
							position: relative;
							top: -2rpx;
						}
					}
				}
				&:after {
					width: 0;
					height: 0;
					border-bottom: 0;
				}
			}
			.cu-list.menu-avatar>.cu-item.goods {
				.content {
				    width: calc(100% - 309.09rpx);
				}
				.action {
					position: absolute;	
				    right: 23.63rpx;
					width: 127.27rpx;
					.cu-avatar {
						width: 127.27rpx;
						height: 127.27rpx;
						margin-top: 18.18rpx;
					}
				}
			}
		}
	}
	.zaiui-news-box.show {
		display: block;
	}
</style>
