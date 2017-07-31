<template>
	<div v-if="isShow">
		<div class="dialog-wrap">
			<div class="dialog-bg" @click="closeMyself()"></div>
			<div class="modal-dialog absolute-position">
				<div class="dialog-title">
					<span class="modal-dialog-title-text">提问</span>
					<span class="modal-dialog-title-close" @click="closeMyself()">提问</span>
				</div>
				<div class="dialog-content">
					<div class="js-add-question-splash add-question-splash-page">
						<p>
							知乎是一个真诚、友善、认真、户主的社区
							<br>
							 我们希望每一个疑惑都有解答，好的问题更容易得到好答案
							 <a href="http://www.zhihu.com/question/19555761">如何提一个好问题？</a>
						</p>
						<p>
							<b>提问应遵循真实、客观、简洁、明确、规范的原则</b>
							<br>
							1、提问应尽可能简洁明了，避免「请问」「有谁知道」「谢谢！」等与问题本身无关的附加语。
							<br>
							2、应避免使用「为神马」「童鞋」「肿么办」等网络用语。
							<br>
							3、基于个人判断或传言的问题，在提问时应在补充说明里详细说明原由
							<br>
							4、避免太宽泛问题，如调查性的问题容易变成每个人都可以发表观点，但对其他人没有价值。
							<br>
						</p>
						<p>
							<b>知乎禁止这些提问</b>
							<br>
							1、和已有问题完全重复的问题，<b>为避免重复，提问前可以先进行搜索</b>
							<br>
							2、招聘 / 求职、交易 / 合作、寻人 / 征友、召集 / 赠送、求码类内容
							<br>
							3、投票类问题。例如：你支持方舟子还是韩寒？
							<br>
							4、作业或其他希望代为完成个人任务类的内容，以及针对个人具体病情的求医问药类问题
							<br>
							完整的提问建议可查看<a href="http://www.zhihu.com/question/19806261">知乎的提问规范有哪些？</a>
						</p>
						<div class="before-ask-form">
							<b>提问前先搜索</b>
							<div>
								<input type="text" class="zg-form-text-input" placeholder="请输入你的问题">
							</div>
						</div>
					</div>
				</div>
				<div class="dialog-buttons">
					
				</div>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
export default{
	props: {
		isShow:{
			type: Boolean,
			default: false
		}
	},
	methods: {
		closeMyself(){
			this.$emit('on-close')
		}
	}
}
</script>

<style scoped>
.dialog-bg {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 95;
    min-height: 100%!important;
    width: 100%!important;
    height: 100%!important;
    overflow: visible;
    background: #666;
    opacity: 0.5;
}
.dialog-wrap {
    position: fixed;
    top: 0;
    left: 30%;
    right: 0;
    bottom: 0;
    z-index: 99;
    overflow: auto;
    width: 550px;
}
.modal-dialog {
    position: absolute;
    z-index: 9999;
    max-width: 100%;
    border-radius: 8px;
    border: 1px solid #888;
    box-shadow: 0 0 80px 0 rgba(0,0,0,.4);
    background: #fff;
    text-align: left;
    margin-top: 14vh;
}
.dialog-title {
    position: relative;
    margin: -1px -1px 0;
    padding: 10px 15px;
    line-height: 14px;
    background: #1D7FE2;
    background: -webkit-linear-gradient(top,#1D7FE2,#0865C2);
    background: linear-gradient(to bottom,#1D7FE2,#0865C2);
    border: 1px solid #0D6EB8;
    border-radius: 6px 6px 0 0;
    box-shadow: 0 1px 0 rgba(255,255,255,.1) inset, 0 1px 1px rgba(0,0,0,.2);
}
.modal-dialog-title-text {
    color: #fff;
    text-shadow: 0 1px 1px rgba(0,0,0,.4);
    font-size: 15px;
    font-weight: 700;
}
.modal-dialog-title-close {
    position: absolute;
    top: 50%;
    _top: 20px;
    right: 3px;
    width: 30px;
    height: 30px;
    margin-top: -15px;
    text-indent: -9999px;
    cursor: pointer;
    background-position: -60px -53px;
    background-image: url(../../../static/img/sprites-1.png);
    background-repeat: no-repeat;
    display: inline-block;
    vertical-align: middle
}
.dialog-content {
    padding: 0 15px;
    margin: 17px 0;
}
.js-add-question-splash{
	padding: 2px 2px 0;
}
.add-question-splash-page p {
    margin-bottom: 18px;
}
.add-question-splash-page .before-ask-form {
    margin-top: 30px;
}
.add-question-splash-page b {
    font-size: 14px;
}
.before-ask-form>div{
	position: relative;
	margin-top: 18px;
}
.add-question-splash-page .before-ask-form input {
    width: 100%;
    border-radius: 2px;
    box-sizing: border-box;
}
.zg-form-text-input, .zg-form-select {
    padding: 8px 10px;
    font-size: 13px;
    line-height: 15px;
    box-shadow: 0 1px 1px rgba(0,0,0,.1) inset;
    border-radius: 3px;
    background: #fff;
    border: 1px solid #ccc;
    color: #222;
}
</style>