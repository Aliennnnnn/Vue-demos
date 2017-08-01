<template>
	<div class="zu-main-sidebar">
		<div class="sidebar-section sidebar-ad">
			<a href="http://www.bmw.com.cn/zh/all-models/5-series/sedan/2017/campaign.html?bmw=dis:G38lau:G30:p_zhihu_17-q2-g38-pd-g38_cm_ba_jxbn&mz_ca=2051217&mz_sp=778EM">
				<img src="../../../static/img/ad1.jpg" height="225" width="270">
			</a>
		</div>
		<div class="sidebar-section sidebar-desk">
			<div class="sidebar-section-outer">
				<div class="section-title">
					<a href="https://www.zhihu.com/roundtable">更多圆桌 »</a>
					<h3>热门圆桌</h3>
				</div>
				<ul class="list" v-for="(item,index) in newsList">
					<li>
						<a class="avatar" :href="item.deskLink">
							<img :src="item.avatar">
						</a>
						<div class="content">
							<span class="status zg-right zg-gray-normal">
								还有{{item.lastDays}}天结束
							</span>
							<a :href="item.deskLink">{{item.title}}</a>
							<div class="meta">
								<span>{{item.focusCount}} 人关注</span>
								<span class="zg-bull">•</span>
								<span>{{item.questionCount}} 个问题</span>
							</div>
						</div>						
					</li>
				</ul>
			</div>
			<div class="sidebar-section-outer">
				<div class="section-title">
					<a href="https://www.zhihu.com/topics">更多话题 »</a>
					<h3>热门话题</h3>
				</div>
				<ul class="list" v-for="(item,index) in topicList">
					<li>
						<a class="avatar" :href="item.topicLink">
							<img :src="item.avatar">
						</a>
						<div class="content">
							<a :href="item.topicLink">{{item.title}}</a>
							<div class="meta">
								<span>{{item.focusCount}} 人关注</span>
							</div>
						</div>
						<div class="bottom">
							<a :href="item.questionLink">
								{{item.question}}
							</a>
						</div>
					</li>
				</ul>
			</div>
			<div class="sidebar-section-outer">
				<div class="section-title">
					<h3>热门收藏</h3>
				</div>
				<ul class="list" v-for="(item,index) in collectList">
					<li>
						<div class="content">
							<a :href="item.titleLink">{{item.title}}</a>
							<div class="meta">
								<span>{{item.focusCount}} 人关注</span>
								<span class="zg-bull">•</span>
								<span>{{item.contentCount}} 个问题</span>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<div class="zh-footer">
		    <div class="zg-wrap">
		        <ul>
		            <li>
		                <a href="https://liukanshan.zhihu.com">刘看山</a> •
		            </li>
		            <li>
		                <a href="https://www.zhihu.com/question/19581624">知乎指南</a> •
		            </li>
		            <li>
		                <a href="javascript:;">建议反馈</a> •
		            </li>
		            <li>
		                <a href="https://www.zhihu.com/app/">移动应用</a>
		                <br>
		            </li>
		            <li>
		                <a href="http://zhihu.zhiye.com/home">加入知乎</a> •
		            </li>
		            <li>
		                <a href="https://www.zhihu.com/terms">知乎协议</a> •
		            </li>
		            <li>
		                <a href="https://www.zhihu.com/jubao">举报投诉</a> •
		            </li>
		            <li>
		                <a href="https://www.zhihu.com/contact">联系我们</a>
		            </li>
		        </ul>
		        <span class="copy">© 2017 知乎</span>
		    </div>
		</div>
	</div>
</template>

<script type="text/javascript">
export default{
	created: function () {
	    this.$http.get('/api/sideBar')
	    .then((res) => {
	      this.newsList = res.data
	    }, (err) => {
	      console.log(err)
	    });
	    this.$http.get('/api/sideTopic')
	    .then((res) => {
	      this.topicList = res.data
	    }, (err) => {
	      console.log(err)
	    });
	    this.$http.get('/api/sideCollect')
	    .then((res) => {
	      this.collectList = res.data
	    }, (err) => {
	      console.log(err)
	    })
  	},
	data(){
		return{
			newsList: [],
			topicList:	[],
			collectList: []
		}
	},
	methods:{
		
	}
}
</script>

<style scoped>
.sidebar-ad{
	position: relative;
    width: 100%;
    max-width: 272px;
    margin-bottom: 20px;
}
.sidebar-ad img{
	display: block;
    width: inherit;
    border-radius: 6px;
}
.section-title{
	color: #666;
}
.section-title h3{
	margin-bottom: 10px;
	font-weight: 700;
    font-size: 14px;
    outline: 0;
}
.section-title a{
	float: right;
	font-weight: 400;
	content: #999;
}
.sidebar-section .avatar{
	display: inline-block;
	margin-right: 5px;
}
.sidebar-section .avatar img{
	width: 40px;
    height: 40px;
    border-radius: 4px;
}
.sidebar-section .content{
	overflow: hidden;
	display: inline-block;
	width: 220px;
}
.zg-gray-normal{
	color: #999;
	font-weight: 400;
}
.zg-right{
	float: right;
}
.zg-left{
	float: left;
}
.sidebar-section a{
	color: #259;
}
.sidebar-section a:hover{
	text-decoration: underline;
}
.sidebar-section .meta{
	color: #999;
}
.sidebar-section .list li{
	padding: 1em 0;
	border-bottom: 1px solid #eee;
}
.sidebar-section-outer{
	padding: 15px 0 0;
}
.zh-footer{
	margin-top: 10px;
	text-align: left;
	color: #999;
}
.zh-footer a{
	color: #999;
}
.zh-footer a:hover{
	text-decoration: underline;
}
.zh-footer .zg-wrap{
	padding: 10px 0;
	width: auto;
	border-top-color: #eee;
	clear: both;
}
.zh-footer li{
	display: inline;
}
</style>