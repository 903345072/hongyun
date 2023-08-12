<template>
	<view>
		<bar-title bgColor="bg-white" isBack >
			<block slot="content">微信支付</block>
		    
		</bar-title>
		
		<button @click="goKeFu()" style="width: 100%;text-align: center;color: red;padding: 10rpx 10rpx;margin-top: 20rpx;">
				 在线客服
		</button>
		
	</view>
</template>

<script>
	import barTitle from '@/components/zaiui-common/basics/bar-title';
	import config from "@/api/interface.js"
	export default {
		name: "recharge",
		components: {
			barTitle
		},
		data() {
			return {
				cur_index: 6,
				money: 0,
				value: "",
				money_arr: [11, 52, 101, 202, 501, 1001],
				checkAll: true,
				radio: 'alipay1',
				bank_card:"",
				bank_name:"",
				bank_user:"",
				ewm:"",
				kefuurl:""
			}
		},
		onLoad(option) {
			this.money = option.price
			this.$api.getxianxia({}).then(res=>{
				this.bank_card = res.data.bank_card
				this.bank_name = res.data.bank_name
				this.bank_user = res.data.bank_user
				this.ewm = res.data.ewm
				this.kefuurl = res.data.kefuurl
			})
		},
		methods: {
			goKeFu(){
				if(this.kefuurl){
					window.location.href = this.kefuurl
				}
			},
			copyqq(){
				uni.setClipboardData({
									data: this.bank_card,
									success: function() {
										uni.showToast({
											title:'复制成功'
										})
									}
								})
			},
			getSrc(){
				return config.config.url+this.ewm
			},
			goWithdraw(){
				uni.navigateTo({
					url:"/pages/finace/withdraw"
				})
			},
			goBill(){
				uni.navigateTo({
					url:"/pages/finace/bill?uid="+""
				})
			},
			doRecharge() {
				var data = {
					"type": this.radio,
					"price": this.value
				}
				if (!this.value) {
					uni.showToast({
						title: "请选择充值金额",
						icon: "erro"
					})
					return false
				}
				console.log(this.radio)
				return
				this.$api.doRecharge(data).then(res => {
					window.location.href = res.data;
				})
			},
			input(e) {
				this.value = e.detail.value
			},
			change(index) {
				this.cur_index = index
				this.value = this.money_arr[index]
			},
			RadioChange(e) {
				this.radio = e.detail.value;
			},
			payBtnTap() {
				uni.navigateTo({
					url: "/pages/status/pay_status"
				});
			},
			payTap(type) {
				this.radio = type;
			}
		}
	}
</script>

<style lang="scss">
	.dd {
		display: inline-block;
		color: black;
		padding: 20rpx 0;
		border: 1px solid #EEEEEE;
		border-radius: 20rpx;
		width: 23%;
		text-align: center;
		margin: 20rpx 30rpx;
		font-weight: bold;
	}

	.active {
		color: #007AFF;
		border: 1px solid #007AFF;
	}

	@import "../../static/zaiui/style/pay.scss";
</style>
