<template>
    <div>
    	<div class="topic-content">
            <div class="topic-feed-title">
                <i class="zg-icon zg-icon-feed-list"></i>
                <span>话题广场</span>
            </div>
            <ul class="zm-topic-cat-main clearfix"> 
                <li @click="showTopic = index" v-for="(item,index) in topicList" class="zm-topic-cat-item">
                   <a v-if="showTopic == index" class="current" href="javascript:;">{{ item.kind }}</a>
                   <a v-else href="javascript:;">{{ item.kind }}</a>
                </li>
            </ul>
            <div class="zm-topic-cat-sub">
                <div v-if="index1 == showTopic " v-for="(item,index1) in topicList" class="zh-general-list">
                    <div v-for="items in item.sort" class="item">
                        <div class="blk">
                            <a :href="items.sortLink">
                                <img :src="items.sortAvatar" height="50" width="50">
                                <strong>{{ items.sortName }}</strong>
                            </a>
                            <p>{{ items.sortIntro }}</p>
                            <a @click="showToggle(items)" href="javascript:;" class="follow meta-item zg-follow">
                                <i class="z-icon-follow"></i>
                                <span v-if="!items.toggle">取消关注</span>
                                <span v-else>关注</span>                               
                            </a>
                        </div>
                    </div>
                </div>
            </div>           
        </div>
        <div class="zu-main-sidebar">
            <div class="sidebar-section sidebar-desk">
                <div class="sidebar-section-outer">
                    <div class="section-title">
                        <h3>热门话题</h3>
                    </div>
                    <ul class="list" v-for="(item1,index) in sideTopicList">
                        <li>
                            <a class="avatar" :href="item1.topicLink">
                                <img :src="item1.avatar">
                            </a>
                            <div class="content">
                                <a :href="item1.topicLink">{{item1.title}}</a>
                                <div class="meta">
                                    <span>{{item1.focusCount}} 人关注</span>
                                </div>
                            </div>
                            <div class="bottom">
                                <a :href="item1.questionLink">
                                    {{item1.question}}
                                </a>
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
    </div>
</template>

<script type="text/javascript">
export default{
	components: {
		
	},
	props: ['arr'],
	created: function () {
        this.$http.get('/api/topicList')
        .then((res) => {
          this.topicList = res.data
        }, (err) => {
          console.log(err)
        });
        this.$http.get('/api/sideTopic')
        .then((res) => {
          this.sideTopicList = res.data
        }, (err) => {
          console.log(err)
        });
    },
    data(){
        return{
            topicList: [],
            sideTopicList: [],
            showTopic: 0
        }
    },
    methods:{
        showToggle(items){
            items.toggle = !items.toggle
        }
    }
}
</script>

<style scoped>
.showFocus{
    display: none;
}
.topic-content{
    width: 632px;
    padding: 70px 0 0 279px;
}
.feed-content #feed-title{
   position: relative;
   left: -45px;
}
.topic-feed-title {
    font-size: 14px;
    font-weight: 700;
    color: #666;
    border-bottom: 1px solid #ccc;
    padding-bottom: 8px;
}
.zg-icon {
    width: 16px;
    height: 16px;
    vertical-align: -4px;
    margin-right: 5px;
    background-position: -50px -88px;
    background-image: url(../../static/img/sprites-1.png);
    background-repeat: no-repeat;
    display: inline-block;
}
.zm-topic-cat-main {
    height: 60px;
    padding: 18px 0 8px;
    border-bottom: 1px solid #eee;
}
.zm-topic-cat-main .zm-topic-cat-item{
    float: left;
    margin: 0 10px 10px 0;
    list-style: none;
    display: inline-block;
}
.zm-topic-cat-main .zm-topic-cat-item a {
    display: block;
    padding: 0 10px;
    border-radius: 30px;
    text-decoration: none;
    border: 1px solid #daecf5;
}
.zm-topic-cat-main .zm-topic-cat-item a:hover{
    background: #259;
    border-color: #259;
    color: #fff;
}
/*.zm-topic-cat-main li:first-child a{ 
    background: #259;
    border-color: #259;
    color: #fff;
}*/
.zm-topic-cat-main .zm-topic-cat-item .current{
    background: #259;
    border-color: #259;
    color: #fff;
}
.zm-topic-cat-sub{
    clear: both;
}
.zm-topic-cat-sub .item {
    position: relative;
    float: left;
    width: 50%;
    list-style: none;
    border-bottom: 1px dotted #eee;
}
.zm-topic-cat-sub .blk {
    padding-left: 62px;
    margin: 18px 15px 18px 0;
}
.zm-topic-cat-sub .blk a{
    color: #259;
}
.zm-topic-cat-sub img, .zm-topic-cat-hot img {
    position: absolute;
    left: 0;
    width: 50px;
    height: 50px;
    border-radius: 3px;
}
.zm-topic-cat-sub img{
    top: 23px;
}
.zm-topic-cat-sub strong, .zm-topic-cat-hot strong {
    display: inline-block;
    height: 1.5em;
    word-wrap: normal;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 12em;
    font-weight: bold;
}
.zm-topic-cat-sub .blk strong:hover {
    text-decoration: underline;
}
.zm-topic-cat-sub p {
    height: 40px;
    overflow: hidden;
}
.zm-topic-cat-sub .follow {
    position: absolute;
    top: 18px;
    right: 15px;  
}
.zm-topic-cat-sub .blk .zg-follow{
    color:#698ebf;
}
.zm-topic-cat-sub .zg-follow:hover {
    color: #259;
    text-decoration: underline;
}
.zm-topic-cat-sub .zg-follow:hover .z-icon-follow{
    background-position: -97px -38px;
}
.z-icon-follow {
    width: 8px;
    height: 9px;
    background-position: -97px -23px;
    display: inline-block;
    line-height: 10px;
    vertical-align: 0;
    background-image: url(../../static/img/sprites-1.png);
    background-repeat: no-repeat;
    margin-right: 5px;
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
.zu-main-sidebar{
    position: absolute;
    float: right;
    margin: 0 0 0 -270px;
    width: 270px;
    top: 50px;
    left: 1240px;
}
</style>