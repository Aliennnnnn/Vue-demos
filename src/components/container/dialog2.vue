<template>
	<div>
        <div class="mutiview-dialog-bg"></div>
		<div class="modal-wrapper">
            <div class="mutiview-dialog SignFlow register show">
                <div class="mutiview-dialog-title">
                    <div class="title register">
                        <!-- <slot name="head"> -->
                            <h1>加入知乎</h1>
                            <h2>与世界分享你的知识、经验和见解</h2>
                        <!-- </slot> -->
                    </div>
                    <div class="title verification right">
                        <h1>验证手机</h1>
                        <h2>请输入你收到的 6 位短信验证码</h2>
                    </div>
                    <span class="mutiview-dialog-title-close z-ico-close"></span>
                    <span class="mutiview-dialog-title-back z-ico-left"></span>
                </div>
                <div class="mutiview-dialog-content">
                    <div class="view register SignupForm">
                        <form>
                            <div class="input-wrapper">
                                <input type="text" name="fullname" placeholder="姓名" required>
                            </div>
                            <div class="input-wrapper">
                                <input type="text" name="phone-num" placeholder="手机号" required>
                            </div>
                            <div class="input-wrapper toggle-password">
                                <input type="password" hidden>
                                <input type="password" name="password" placeholder="密码（不少于 6 位）" required>
                                <span class="z-ico-show-password"></span>
                            </div>
                            <div class="actions">
                                <button class="submit blue-button">注册</button>
                            </div>
                            <div class="sns clearfix">
                                <span>已有账号？</span>
                                <a href="#" class="switch-to-login">登录</a>
                            </div>
                        </form>
                    </div>
                    <div class="view verfication right">
                        <form></form>
                    </div>
                </div>
            </div>
		</div>
	</div>
</template>

<script type="text/javascript">
export default{
	
}
</script>

<style scoped>
.mutiview-dialog-bg{
    position: fixed;
    left: 0;
    top: 0;
    z-index: 95;
    min-height: 100%!important;
    width: 100%!important;
    height: 100%!important;
    overflow: visible;
    background: #fff;
    opacity: 0.5;
}
.modal-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99;
    overflow: auto;
}
.mutiview-dialog {
    margin-top: 14vh;
    margin-left: 33%;
    width: 300px;
    color: #787878;
    font-size: 14px;
    background-color: #fff;
    border: 1px solid #cbcbcb;
    border-radius: 5px;
    box-shadow: 0 0 15px 0 rgba(0,0,0,.3);
    outline: 0;
    z-index: 99;
    /*opacity: 0;*/
    -ms-filter: "alpha(Opacity=0)";
    overflow: hidden;
    -webkit-transform: translate(0,20px);
    -ms-transform: translate(0,20px);
    transform: translate(0,20px);
    -webkit-transition: .3s ease-out;
    transition: .3s ease-out;
}
.mutiview-dialog .mutiview-dialog-title {
    position: relative;
    height: 92px;
}
.SignFlow {
    color: #787878;
    font-size: 14px;
}
.mutiview-dialog .mutiview-dialog-title .title {
    position: absolute;
    padding-top: 25px;
    padding-bottom: 25px;
    width: 100%;
    height: 42px;
    text-align: center;
    line-height: 1;
    -webkit-transition: .3s ease-out;
    transition: .3s ease-out;
}
.mutiview-dialog .mutiview-dialog-title .title h1 {
    font-size: 16px;
    line-height: 18px;
    font-weight: 700;
    margin-bottom: 10px;
}
.mutiview-dialog .mutiview-dialog-title .title h2 {
    font-size: 14px;
    font-weight: 400;
}
.mutiview-dialog .mutiview-dialog-title .title.right {
    visibility: hidden;
    opacity: 0;
    -ms-filter: "alpha(Opacity=0)";
    -webkit-transform: translate(50px,0);
    -ms-transform: translate(50px,0);
    transform: translate(50px,0);
}
.mutiview-dialog .mutiview-dialog-title .title {
    position: absolute;
    padding-top: 25px;
    padding-bottom: 25px;
    width: 100%;
    height: 42px;
    text-align: center;
    line-height: 1;
    -webkit-transition: .3s ease-out;
    transition: .3s ease-out;
}
.mutiview-dialog .mutiview-dialog-title .mutiview-dialog-title-close {
    right: 10px;
    opacity: .2;
    -ms-filter: "alpha(Opacity=20)";
}
.mutiview-dialog .mutiview-dialog-title .mutiview-dialog-title-back, .mutiview-dialog .mutiview-dialog-title .mutiview-dialog-title-close {
    position: absolute;
    top: 10px;
    cursor: pointer;
    -webkit-transition: opacity .2s ease-out;
    transition: opacity .2s ease-out;
}
.z-ico-close {
    background-position: -37px -76px;
    width: 16px;
    height: 16px;
}
.mutiview-dialog .mutiview-dialog-title .mutiview-dialog-title-back {
    visibility: hidden;
    left: 10px;
    opacity: 0;
    -ms-filter: "alpha(Opacity=0)";
}
.mutiview-dialog .mutiview-dialog-title .mutiview-dialog-title-back, .mutiview-dialog .mutiview-dialog-title .mutiview-dialog-title-close {
    position: absolute;
    top: 10px;
    cursor: pointer;
    -webkit-transition: opacity .2s ease-out;
    transition: opacity .2s ease-out;
}
.z-ico-left {
    background-position: -19px -76px;
    width: 16px;
    height: 16px;
}
.mutiview-dialog .mutiview-dialog-content {
    position: relative;
}
.mutiview-dialog .mutiview-dialog-content .view {
    width: 100%;
    box-sizing: border-box;
    -webkit-transition: .3s ease-out;
    transition: .3s ease-out;
}
form {
    display: block;
    margin-top: 0em;
}
.SignFlow .input-wrapper:first-child {
    border-top: 1px solid #eee;
}
.SignFlow .input-wrapper {
    position: relative;
    border-bottom: 1px solid #eee;
}
.SignFlow .input-wrapper input {
    padding: 15px 8px;
    height: 48px;
    width: 100%;
    font-size: 14px;
    line-height: 18px;
    color: #787878;
    border: 0;
    outline: 0;
    box-sizing: border-box;
}
.SignFlow .input-wrapper.toggle-password input {
    padding-right: 41px;
}
.SignFlow .input-wrapper.toggle-password .z-ico-show-password {
    position: absolute;
    top: 0;
    right: 0;
    margin: auto;
    border: solid #fff;
    border-width: 17px 8px 17px 0;
    cursor: pointer;
}
.z-ico-show-password {
    background-position: -41px -25px;
    width: 21px;
    height: 13px;
}
.SignupForm .actions, .LoginForm .actions {
    margin-top: 12px;
    padding: 0 8px;
    line-height: 30px;
}
.SignupForm .actions button.submit, .LoginForm .actions button.submit {
    width: 100%;
    padding: 10px 0;
}
.SignFlow .blue-button {
    display: inline-block;
    background-color: #0077d9;
    padding: 8px 16px;
    font-size: 14px;
    line-height: 1;
    color: #fff;
    border: 0;
    border-radius: 3px;
    outline: 0;
    cursor: pointer;
}
.SignFlow button {
    padding: 0;
    font-size: 14px;
    color: #787878;
    background: 0 0;
    border: 0;
    outline: 0;
    cursor: pointer;
}
.SignupForm .sns, .LoginForm .sns {
    position: relative;
    padding: 0 8px;
    line-height: 54px;
}
.SignupForm .sns, .LoginForm .sns a{
    color: #259;
}
</style>