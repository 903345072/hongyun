<template>
	<view>
		<bar-title bgColor="bg-white" isBack @rightTap="goBill()">
			<block slot="content">店铺余额</block>
			<block slot="right">
				<text>账单</text>
			</block>
		</bar-title>
		<view>
			<view
				style="display: flex;align-items: center;justify-content: space-between;font-size: 35rpx;background-color: white;padding: 20rpx 20rpx;width: 100%;margin-top: 30rpx;">
				<view>当前余额： <text style="color: #007AFF;">{{money}}</text></view>
				<view @click="goWithdraw()"
					style="background: linear-gradient(90deg,#51caff,#3192ff);color: white;padding: 10rpx 30rpx;border-radius: 50rpx;font-size: 30rpx;">
					去提现</view>
			</view>
			<view style="background-color: white;margin: 20rpx 20rpx;border-radius: 20rpx;padding: 20rpx 5rpx;">
				<view style="margin-left: 20rpx;font-size: 35rpx;">请选择充值金额</view>
				<view style="width: 100%;margin-left: 3%;">
					<view @click="change(index)" v-for="(item,index) in money_arr" :key="index" class="dd"
						:class="[{'active':cur_index == index?true:false}]">
						￥{{item}}
					</view>
				</view>
				<view
					style="width: 90%;margin-left: 5%;border: 1px solid #EEEEEE;border-radius: 20rpx;height: 90rpx;padding-left: 30rpx;position: relative;display: flex;align-items: center;">
					<view class="cuIcon-moneybag" style="margin-right: 30rpx;"></view>
					<input @input="input" type="digit" v-model="value" placeholder="请输入充值金额" />
				</view>
			</view>

			<view style="background-color: white;margin: 30rpx 20rpx;border-radius: 20rpx;padding: 20rpx 5rpx;">
				<view style="margin-left: 20rpx;font-size: 35rpx;">支付方式</view>
				<view class="bg-white zaiui-pay-view">
					<radio-group class="block" @change="RadioChange">
						
						<!-- <view class="zaiui-pay-bar" @tap="payTap('yl')">
								<view class="cu-avatar sm" style="background-image:url(/static/zaiui/img/v.png)" />
								<view class="content">
									<view class="text-black">
										<text class="margin-right-sm">快捷支付</text>
							
									</view>
									<view class="text-gray text-sm">银联支付</view>
								</view>
								<view class="action">
									<radio class="red zaiui-radio" :class="radio=='yl'?'checked':''"
										:checked="radio=='yl'?true:false" value="yl" />
								</view>
							</view> -->
						<!-- <view class="zaiui-pay-bar" @tap="payTap('alipay2')">
							<view class="cu-avatar sm" style="background-image:url(/static/zaiui/img/alipay.png)" />
							<view class="content">
								<view class="text-black">
									<text class="margin-right-sm">支付宝支付(通道一)</text>

								</view>
								<view class="text-gray text-sm">数亿用户都在用，安全可托付</view>
							</view>
							<view class="action">
								<radio class="red zaiui-radio" :class="radio=='alipay2'?'checked':''"
									:checked="radio=='alipay2'?true:false" value="alipay2" />
							</view>
						</view> -->
						
					
						
						<view class="zaiui-pay-bar" @tap="payTap('alipay1')">
							<view class="cu-avatar sm" style="background-image:url(/static/zaiui/img/alipay.png)" />
							<view class="content">
								<view class="text-black">
									<text class="margin-right-sm">支付宝支付(通道二)</text>
									<text class="cu-tag line-red radius sm">HOT</text>
								</view>
								<view class="text-gray text-sm">数亿用户都在用，安全可托付</view>
							</view>
							<view class="action">
								<radio class="red zaiui-radio" :class="radio=='alipay1'?'checked':''"
									:checked="radio=='alipay1'?true:false" value="alipay1" />
							</view>
						</view>
						
						
						<!-- <view class="zaiui-pay-bar" @tap="payTap('wx')">
							<view class="cu-avatar sm" style="background-image:url(/static/zaiui/img/wechat.png)" />
							<view class="content">
								<view class="text-black">
									<text class="margin-right-sm">微信支付</text>
						
								</view>
								<view class="text-gray text-sm">微信扫码</view>
							</view>
							<view class="action">
								<radio class="red zaiui-radio" :class="radio=='wx'?'checked':''"
									:checked="radio=='wx'?true:false" value="wx" />
							</view>
						</view> -->


						
					</radio-group>
				</view>

				<view @click="doRecharge()"
					style="background-color: #007AFF;color: white;width: 90%;height: 80rpx;line-height: 80rpx;text-align: center;margin-left: 5%;border-radius: 10rpx;margin-top: 20rpx;">
					充值
				</view>

				<view style="color: grey;padding: 20rpx 20rpx;">
					<div style="line-height: 60rpx;" data-v-2234a3f0="" class="fz-13 tips p-t-4"><span data-v-2234a3f0="">充值说明：</span><br
							data-v-2234a3f0=""><span data-v-2234a3f0="">1.为防止恶意套现和洗钱，您在本平台的充值金额只能用于消费</span><br
							data-v-2234a3f0=""><span
							data-v-2234a3f0="">2.本平台为店主的数字化管理工具，您充值的金额将直接进入店主账户，本平台不对用户资金托管和监管，如出现资金问题请及时联系店主处理与平台无关</span><br
							data-v-2234a3f0=""><span
							data-v-2234a3f0="">3.如有联系不上店主需要帮助的，请在首页右上角点击投诉并描述具体情况和诉求，平台客服会协助您处理</span><br data-v-2234a3f0="">
						
					</div>
							
					<view style="display: flex;justify-content: center;">
						<radio-group class="block" @change="RadioChange">
							<view class="action" @tap="choseXieYi" style="font-size: 23rpx;">
								<radio class="red zaiui-radio" :class="is_gree?'checked':''"
									:checked="is_gree" value="alipay1" />
								<text style="color: red;padding: 0 10rpx;">我已年满18周岁</text>
									<text style="">已阅读并同意</text>	
									<text @click="popxieyi"  style="color: red;cursor: pointer;">《用户协议及法律声明》</text>
							</view>
						
						</radio-group>
					</view>		
				</view>
			</view>



		</view>
		<view v-if="ishow" style="text-indent:30px;padding: 40rpx 40rpx; position: absolute;left: 80rpx;right: 80rpx;top: 80rpx;bottom: 80rpx;z-index: 9999999;background-color: white;overflow: scroll;">
			<view @tap="closex" style="position: absolute;right: 50rpx;top: 50rpx;color: blue;z-index: 999999;">
				关闭
			</view>
			<scroll-view>
				<h3>【鸿运小店】用户协议</h3>
				
				     【审慎阅读】
				<h4 style="">请您务必审慎阅读、充分理解各条款的内容，特别是免除或者限制责任的条款、争议解决和法律适用条款等(如果您是未满18周岁的未成年人，审阅时应由法定监护人陪同)
				请您使用本应用软件之前，请务必仔细阅读并理解《用户协议》（以下简称“本协议”）中规定的多有权利和限制。
				我们一向尊重并会严格保护用户在使用本产品时的合法权益不受到任何侵犯。
				本协议是用户（包括通过各种合法途径获取到本产品的自然人、法人或其他组织机构，以下简称“用户”或“您”）与我们之间针对本产品相关事项最终的、完整的且排他的协议，并取代、合并之前的当事人之间关于上述事项的讨论和协议。
				本协议将对用户使用本产品的行为产生法律约束力，您已承诺和保证有权利和能力订立本协议。用户开始使用本产品将视为已经接受本协议，请认真阅读并理解本协议中各种条款，包括免除和限制我们的免责条款和对用户的权利限制（未成年人审阅时应由法定监护人陪同），如果您不能接受本协议中的全部条款，请勿开始使用本产品。
				使用账户</h4>
				<h3>您必须承诺和保证：</h3> 
				<h4>
					您使用本产品的行为必须合法；
					本产品将会依据本协议“修改和终止”的规定保留或终止您的账户。您必须承诺对您的登录信息保密、不被其他人获取与使用，并且对您在本账户下的所有行为负责。您必须将任何有可能触犯法律的、未授权使用或怀疑为未授权使用的行为在第一时间通知本产品。本产品不对您因未能遵守上述要求而造成的损失承担法律责任。
					终端用户协议许可
					依据本协议规定，本产品将授予您以下不可转让的、非排他的许可： 
					使用本产品的权利；
					在您所有的网络通信设备、计算机设备和移动通信设备上下载、安装、使用本产品的权利。
					限制性条款
					本协议对您的授权将受到以下限制： 
					您不得对本产品进行任何形式的许可、出售、租赁、转让、发行或其他商业用途；
					除非法律禁止此类限制，否则您不得对本产品的任何部分或衍生产品进行修改、翻译、改编、合并、利用、分解、改造或反向编译、反向工程等；
					您不得以创建相同或竞争服务为目的使用本产品；
					除非法律明文规定，否则您不得对本产品的任何部分以任何形式或方法进行生产、复制、发行、出售、下载或显示等；
					您不得删除或破坏包含在本产品中的任何版权声明或其他所有权标记。
					费用
					您必须自行负担购买本产品的费用，个人上网或第三方（包括但不限于电信或移动通讯提供商）收取的通讯费、信息费等相关费用。如涉及电信增值服务，我们建议您与增值服务提供商确认相关费用问题。
					版本
					任何本产品的更新版本或未来版本、更新或者其他变更将受到本协议约束。
				</h4>
				<h3>遵守法律</h3>
				<h4>
					您同意遵守《中华人民共和国合同法》、《中华人民共和国著作权法》及其实施条例、《全国人民代表大会常务委员会关于维护互联网安全的决定》（“人大安全决定”）、《中华人民共和国保守国家秘密法》、《中华人民共和国电信条例》（“电信条例“）、《中华人民共和国计算机信息系统安全保护条例》、《中华人民共和国计算机信息网络国际联网管理暂行规定》及其实施办法、《计算机信息系统国际联网保密管理规定》、《互联网信息服务管理办法》、《计算机信息网络国际联网安全保护管理办法》、《互联网电子公告服务管理规定》（“电子公告规定”）等相关中国法律法规的任何及所有的规定，并对以任何方式使用您的密码和您的账号使用本服务的任何行为及其结果承担全部责任。如违反《人大安全决定》有可能构成犯罪，被追究刑事责任。《电子公告规定》则有明文规定，上网用户使用电子公告服务系统对所发布的信息负责。《电信条例》也强调，使用电信网络传输信息的内容及其后果由电信用户负责。在任何情况下，如果本网站有理由认为您的任何行为，包括但不限于您的任何言论和其它行为违反或可能违反上述法律和法规的任何规定，本网站可在任何时候不经任何事先通知终止向您提供服务。
					用户内容
					用户内容是指该用户下载、发布或以其他方式使用本产品时产生的所有内容（例如：您的信息、图片、音乐或其他内容）。
					您是您的用户内容唯一的责任人，您将承担因您的用户内容披露而导致的您或任何第三方被识别的风险。
					您已同意您的用户内容受到权利限制（详见“权利限制”）
					权利限制
					您已同意通过分享或其他方式使用本产品中的相关服务，在使用过程中，您将承担因下述行为所造成的风险而产生的全部法律责任： 
					破坏宪法所确定的基本原则的；
					危害国家安全、泄露国家秘密、颠覆国家政权、破坏国家统一的；
					损害国家荣誉和利益的；
					煽动民族仇恨、民族歧视，破坏民族团结的；
					破坏国家宗教政策，宣扬邪教和封建迷信的；
					散布淫秽、色情、赌博、暴力、凶杀、恐怖或者教唆犯罪的；
					侮辱或者诽谤他人，侵害他人合法权益的；
					含有法律、行政法规禁止的其他内容的。
					您已经同意不在本产品从事下列行为： 
					发布或分享电脑病毒、蠕虫、恶意代码、故意破坏或改变计算机系统或数据的软件；
					未授权的情况下，收集其他用户的信息或数据，例如电子邮箱地址等；
					用自动化的方式恶意使用本产品，给服务器造成过度的负担或以其他方式干扰或损害网站服务器和网络链接；
					在未授权的情况下，尝试访问本产品的服务器数据或通信数据；
					干扰、破坏本产品其他用户的使用。
				</h4>
				<h3>修改和终止</h3>
				<h4>
					修改
					本协议容许变更。如果本协议有任何实质性变更，我们将通过电子邮件来通知您。变更通知之后，继续使用本产品则为您已知晓此类变更并同意条款约束；
					我们保留在任何时候无需通知而修改、保留或关闭本产品任何服务之权利；
					您已同意我们无需因修改、保留或关闭本产品任何服务之权利；
					您已同意我们无需因修改、保留或关闭本产品任何服务的行为对您或第三方承担责任。
					终止
					本协议自您接受之日起生效，在您使用本产品的过程中持续有效，直至依据本协议终止；
					尽管有上述规定，如果您使用本产品的时间早于您接受本协议的时间，您在此知晓并同意本协议于您接受本协议的时间，您在此知晓并同意本协议于您第一次使用本产品时生效，除非依据本协议提前终止；
					我们可能会依据法律的规定，保留您使用本产品或者本账户的权利；无论是否通知，我们将在任何时间以任何原因终止本协议，包括出于善意的相信您违反了我们可接受使用政策或本协议的其他规定；
					不受前款规定所限，如果用户侵犯第三人的版权且我们接到版权所有人或版权所有人的合法代理人的通知后，我们保留终止本协议的权利；
					一旦本协议终止，您使用本产品的权利即告终止。您应当知晓您的产品终止意味着您的用户内容将从我们的活动数据库中删除。我们不因终止本协议对您承担任何责任，包括终止您的用户账户和删除您的用户内容。
				</h4>
				<h3>第三方</h3>
				<h4>
					您已知晓或同意我们的部分服务时基于第三方的技术支持获得；
					您已知晓本协议是您在与我们之前签订，而非您与上述第三方之间签订。我们是基于本产品所产生的内容、维护、支持服务、保证和由此产生的诉讼等事项的唯一责任人。您已同意遵守且授权给本产品限制您有条件地使用本产品的服务。
					第三方信息和服务
					本产品包含了第三方的部分信息和服务。我们不控制且不对第三方的信息和服务负责；
					我们仅为您使用方便的目的或为承诺和保证第三方的需要而提供此类信息和服务；
					用户需对使用第三方信息和服务产生的风险承担法律责任；
					当用户访问第三方信息和服务时，适用第三方的条款和政策。
				</h4>
				<h3>赔偿</h3>
				<h4>
					您已同意无害地使用本产品，避免因下述行为或相关行为遭受来第三方的任何投诉、诉讼、损失、损害、责任、成本和费用（包括律师费）：
					用户使用本产品的行为；
					用户的用户内容；
					用户违反本协议的行为。
					我们保留专属抗辩权和请求赔偿的权利
					您已同意，除非获得我们书面同意，您不得在您与我们共同对第三方提起的诉讼中单方和解。
					我们将尽合理努力将此类诉讼、诉讼行为或进程通知您。
					在任何情况下，本产品都不对您或任何第三方因本协议产生的任何间接性、后果性、惩罚性的、偶然的、特殊或惩罚性的损害赔偿承担责任。访问、使用本产品所产生的损坏计算机系统或移动通讯设备数据的风险将由您个人承担。
				</h4>
				<h3>
					适用法律
				</h3>
				<h4>
					本协议适用中华人民共和国法律；
					如果双方发生纠纷，应本着友好的圆柱协商解决；如协商不成，应向所在地的法院提起诉讼。
				</h4>
				<h3>
					独立性
				</h3>
				<h4>
					本协议中的某些条款因故无法适用，则本协议的其他条款继续适用且无法适用的条款将会被修改，以便其能够依法适用。
				</h4>
				<h3>
					完整性
				</h3>
				<h4>
					本协议（包括隐私政策）是您和本产品之间关于本产品相关事项的最终的、完整的、排他的协议，且取代和合并之前当事人关于此类事项（包括之前的最终用户许可、服务条款和隐私政策）的讨论和协议；
					每部分的题目只为阅读之便而无任何法律或合同义务；
				</h4>
			</scroll-view>
		</view>	
	</view>
</template>

<script>
	import barTitle from '@/components/zaiui-common/basics/bar-title';
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
				is_gree:true,
				ishow:false
			}
		},
		onLoad(option) {
			this.money = option.money
		},
		methods: {
			closex(){
				this.ishow = false
			},
			popxieyi(){
				this.ishow = !this.ishow
			},
			choseXieYi(){
				
				this.is_gree = !this.is_gree
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
				if(!this.is_gree){
					uni.showToast({
						title: "请同意协议",
						icon: "erro"
					})
					return false
				}
				if(this.radio == 'wx' || this.radio == 'alipay2'){
					this.$api.doRecharge(data).then(res => {
						window.location.href = res.data;
					})
					return
				}else if(this.radio == 'yl'){
					this.$api.doRecharge(data).then(res => {
						window.location.href = res.data;
					})
				}else{
					this.$api.doRecharge(data).then(res => {
						window.location.href = res.data;
					})
				}
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
