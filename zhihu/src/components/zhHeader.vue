<template>
    <div>
    	<div class="head-nav">
    		<a href="#" class="nav-logo">
                <img src="../../static/img/new_logo.png" height="30" width="61">      
            </a>
    		<form class="nav-form">
    			<input type="text" class="nav-form-search" placeholder="搜索你感兴趣的内容...">
    			<button class="nav-form-btn">
    				<span class="sprite-global-search"></span>
    			</button>
    		</form>
    		<ul class="nav-list">
    			<li @click="currentIndex = 0" :class="{ current: currentIndex==0 }"><router-link :to="{ path: '/' }">首页</router-link></li>
    			<li @click="currentIndex = 1" :class="{ current: currentIndex==1 }"><router-link :to="{ path: 'topic' }">话题</router-link></li>
    			<li @click="currentIndex = 2" :class="{ current: currentIndex==2 }"><router-link :to="{ path: 'explore' }">发现</router-link></li>
    		</ul>
    		<button class="nav-question" @click="askClick()">提问</button>
    		<div class="nav-user">
    			<a href="#" class="nav-user-info">						
    				<img class="Avatar" src="../assets/img/head.jpg" height="25" width="25">
    				<span class="name">User</span>						
    			</a>
    			<ul class="nav-dropdown">
    				<li>
    					<a href="https://www.zhihu.com/">
    						<i class="zg-icon zg-icon-home"></i>
    						<span>我的主页</span>
    					</a>
    				</li>
    				<li>
    					<a href="#">
    						<i class="zg-icon zg-icon-setting"></i>
    						<span>设置</span>
    					</a>
    				</li>
    				<li>
    					<a href="#">
    						<i class="zg-icon zg-icon-logout"></i>
    						<span>退出</span>
    					</a>
    				</li>
    			</ul>
    		</div>
    	</div>
        <my-dialog :is-show="isShowDialog" @on-close="closeDialog()"></my-dialog>
    </div>
</template>

<script type="text/javascript">
import myDialog from './container/dialog.vue'
export default{
    components: {
        myDialog
    },
    data(){
        return{
            currentIndex: 0,
            isShowDialog: false
        }
    },
    methods: {
        askClick(){
            this.isShowDialog = true
        },
        closeDialog(){
            this.isShowDialog = false
        }
    }
}
</script>

<style scoped>
.head-nav{
	width: 960px;
	height: 100%;
	margin: 0 auto;
}
.nav-user,.nav-form,.nav-form-search,.nav-list,.nav-list li{
	display: inline-block;
}
.nav-logo{
    background-image: url(../../static/img/new_logo.png);
    background-repeat: no-repeat;
    background-position: 0 8px;
    color: #fff;
    float: left;
    height: 100%;
    text-indent: -9999px;
    width: 61px;
}
.nav-form{
	width: 367px;
	position: relative;
	margin: 7px 0 0 12px;
}
.nav-form-search{
	padding: 7px 50px 7px 10px;
    width: 100%;
    color: #49525c;
    font-size: 14px;
    line-height: 17px;
    background-color: #e1eaf2;
    border: 1px solid #045bb2;
    border-radius: 4px;
    box-shadow: inset 0 1px 3px rgba(0,0,0,.2), 0 1px 0 rgba(255,255,255,.1);
    outline: 0;
    box-sizing: border-box;
    -webkit-transition: all .2s ease-in-out;
    transition: all .2s ease-in-out;
}
.nav-form-search:focus{
	background-color: #fff;
}
.nav-form-btn{
	position: absolute;
	top: 0;
	right: 0;
	width: 40px;
	height: 100%;
	background: linear-gradient(to bottom,#0e7bef,#0d73da);
    border: 1px solid #045bb2;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    box-shadow: 0 1px 2px rgba(0,0,0,.05), inset 0 1px 1px rgba(255,255,255,.15);
    box-sizing: border-box;
    outline: 0;
    cursor: pointer;
}
.sprite-global-search{
	background-position: -82px 0;
    width: 15px;
    height: 15px;
    background-image: url(../assets/img/sprites.png);
    background-repeat: no-repeat;
        display: inline-block;
    vertical-align: middle;
}
.nav-list{
	color: #fff;
	position: relative;
	margin: 0 0 0 18px;
	font-size: 14px;
}
.nav-list li a:hover{
	color:#fff;
}
.nav-list .current{
	background: #075fb6;
    background: -webkit-linear-gradient(top,#055fb8,#095fb3);
    background: linear-gradient(to bottom,#055fb8,#095fb3);
    box-shadow: inset 0 0 2px rgba(0,0,0,.12);
}
.nav-list li a{
	color: #f2f4f5;
    display: block;
    font-size: 14px;
    height: 45px;
    line-height: 45px;
    text-align: center;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.12);
    width: 54px;
}
.nav-question{
	position: relative;
	left: 60px;	
    width: 66px;
    height: 32px;
    line-height: 30px;
    margin-top: 7px;
    border: 1px solid #045bb2;
    border-radius: 4px;
    background: #0e78e7;
    background: -webkit-linear-gradient(top,#0e7bef,#0d73da);
    background: linear-gradient(to bottom,#0e7bef,#0d73da);
    box-shadow: 0 1px 2px rgba(0,0,0,.05), inset 0 1px 1px rgba(255,255,255,.15);
    color: #fff;
    font-size: 14px;
    text-align: center;
    text-shadow: 0 1px 1px rgba(0,0,0,.12);
    outline: 0;
    cursor: pointer;
    -webkit-transition: all .2s ease-in-out;
    transition: all .2s ease-in-out;
}
.nav-user{
	float: right;
    position: relative;
    min-width: 120px;
    margin-left: 15px;
    z-index: 10;
}
.nav-user:hover{
	background-color: #095fb3;
}
.nav-user:hover .nav-dropdown{
	display: block;
}
.nav-user-info{
	background: transparent none repeat scroll 0 0;
    border-top: 0 none;
    box-shadow: none;
    color: #fff;
    height: 45px;
    line-height: 45px;
    overflow: hidden;
    position: relative;
    text-decoration: none;
    text-indent: 46px;
    text-overflow: ellipsis;
    white-space: nowrap;    
    display: block;
    font-size: 14px;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.12);
    width: 120px;
}
.nav-user .Avatar {
    position: absolute;
    top: 9px;
    left: 10px;
    border: 1px solid rgba(0,0,0,.1);
    box-shadow: 0 1px 0 rgba(255,255,255,.1);
    background-color: transparent;
    border-radius: 5px;
}
.nav-dropdown{
	position: absolute;
	left: 0px;
	top:46px;
	margin: 0;
	display: none;
}
.nav-dropdown li a{
    height: 40px;
    line-height: 40px;
    color: #fff;
    text-decoration: none;
    border-top: 1px solid #0d5aa5;
    box-shadow: 0 1px 1px rgba(0,0,0,.4);
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    cursor: pointer;
    display: block;
    width: 120px;
    background-color: #095fb3;
    text-shadow: 0 1px 1px rgba(0,0,0,.12);
    font-size: 14px;
}
.nav-dropdown li a:hover{
	background-color: #0267cc;
}
.nav-dropdown li .zg-icon{
	width: 20px;
    height: 20px;
    margin: 0 11px 0 15px;
    vertical-align: -7px;
    background-image: url(../assets/img/sprites-1.png);
    background-repeat: no-repeat;
    display: inline-block;
}
.nav-dropdown li .zg-icon-home{
	background-position: -6px -7px;
}
.nav-dropdown li .zg-icon-pm{
	background-position: -6px -34px;
}
.nav-dropdown li .zg-icon-setting{
	background-position: -6px -60px;
}
.nav-dropdown li .zg-icon-logout{
	background-position: -6px -87px;
}
</style>