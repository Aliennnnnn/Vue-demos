<template>
	<div class="main-container">
		<div class="main-container-inner">
			<div class="main-home">
				<home-entry></home-entry>
			</div>
			<div class="main-list-title">
				<i class="main-icon-feedlist"></i>
				最新动态
				<input type="hidden">
				<span class="main-noti-settings">
					<a href="#">
						<i class="main-icon-settings"></i>设置
					</a>
				</span>
			</div>
			<div class="main-feed-con">
				<story></story>				
			</div>				
		</div>
		<div class="main-side-bar">
			<side-bar></side-bar>
		</div>
	</div>
</template>
<script type="text/javascript">
import homeEntry from './container/homeEntry.vue'
import story from './story.vue'
import sideBar from './container/sideBar.vue'
export default{
	components:{
		homeEntry,
		story,
		sideBar
	}
}
</script>
<style scoped>
.main-container{
	min-height: 340px;
    padding: 25px 0 50px;
    position: relative;
    top: 46px;
    z-index: 2;
    width: 960px;
    margin: 0 auto;
    clear: both;
}
.main-container-inner{
	width: 632px;
	/*position: relative;
    margin: 0 328px 0 0;
    right:328px;*/
}
.main-home{
	margin-bottom: 30px;
}
.main-list-title{
	font-size: 14px;
    color: #666;
    font-weight: 700;
    margin: 0 0 10px;
    display: block;
    padding-bottom: 10px;

}
.main-icon-feedlist{
	width: 16px;
	height: 16px;
	display: inline-block;
	vertical-align: -4px;
	margin-right: 5px;
	background-position: -71px -88px;
	background-image: url(../assets/img/sprites-1.png);
}
.main-noti-settings{
	font-weight: 400;
    font-size: 13px;
    float: right;
}
.main-noti-settings a{
	color: #999;
	font-weight: 400;
}
.main-noti-settings a:hover{
	text-decoration: underline;
	color: #259;
}
.main-noti-settings a i{
	width: 16px;
    height: 16px;
    background-position: -88px -148px;
    margin-right: 1px;
    vertical-align: -5px;
    background-image: url(../assets/img/sprites-1.png);
    background-repeat: no-repeat;
    display: inline-block;
}
.main-feed-con{
	position: relative;
}
.main-side-bar{
	position: absolute;
    float: right;
    margin: 0 0 0 -270px;
    width: 270px;
    top: 25px;
    left: 960px;
}
</style>