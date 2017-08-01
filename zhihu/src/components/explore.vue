<template>
    <div>
    	<div class="explore-content">
            <div class="explore-feed-title">
                <i class="zg-icon zg-icon-feed-list"></i>
                <span>编辑推荐</span>
                <a class="zg-link-gray zg-right" href="https://www.zhihu.com/explore/recommendations">
                    <span>更多推荐 »</span>
                </a>
            </div>
            <div id="zh-recommend-list">
                <div v-for="item in recommendList" class="recommend-feed feed-item">
                     <span class="zg-right zg-gray-normal feed-meta">{{ item.part }}</span>
                     <h2>
                         <a class="question-link" :href="item.titleLink">{{ item.title }}</a>
                     </h2>
                </div>
            </div>
            <div class="explore-tab">
                <a class="zg-anchor-hidden" name="daily-hot"></a>
                <a class="zg-anchor-hidden" name="monthly-hot"></a>
                <ul class="tab-navs clearfix">
                    <li @click="tabHot = false" :class="{ active: !tabHot }" class="tab-nav">
                        <a href="javascript:;" class="anchor">今日最热</a>
                    </li>
                    <li @click="tabHot = true" :class="{ active: tabHot }" class="tab-nav">
                        <a href="javascript:;" class="anchor">本月最热</a>
                    </li>
                </ul>
                <div v-if="!tabHot">
                    <div class="explore-feed feed-item">
                        <div class="zm-item-answer">
                            <top-story :arr="topicStoryList1"></top-story>
                        </div>
                    </div>
                </div>
                <div v-else>
                    <div class="explore-feed feed-item">
                        <div class="zm-item-answer">
                            <top-story :arr="topicStoryList2"></top-story>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
        <div class="explore-sidebar">
            <side-bar></side-bar>
        </div>
    </div>
</template>

<script type="text/javascript">
import topStory from './container/topStory.vue'
import sideBar from './container/sideBar.vue'
export default{
	components: {
		topStory,
        sideBar
	},
	created: function () {
        this.$http.get('/api/exploreRecommend')
        .then((res) => {
          this.recommendList = res.data
        }, (err) => {
          console.log(err)
        });
        this.$http.get('/api/topicStory1')
        .then((res) => {
          this.topicStoryList1 = res.data
        }, (err) => {
          console.log(err)
        });
        this.$http.get('/api/topicStory2')
        .then((res) => {
          this.topicStoryList2 = res.data
        }, (err) => {
          console.log(err)
        });
    },
    data(){
        return{
            recommendList: [],
            topicStoryList1: [],
            topicStoryList2: [],
            tabHot: false
        }
    },
    methods:{
        
    }
}
</script>

<style>
.explore-content{
    width: 632px;
    padding: 70px 0 0 279px;
}
.feed-content #feed-title{
   
}
.explore-feed-title {
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
    background-position: -71px -88px;
    background-image: url(../../static/img/sprites-1.png);
    background-repeat: no-repeat;
    display: inline-block;
}
.feed-item {
    padding: 10px 0;
    position: relative;
    margin-left: 0;
    outline: 0;
    clear: both;
}
.feed-item+.feed-item {
    border-top: 1px solid #eee;
}
.feed-item:first-child{
    border-top: none;
}
.zg-gray-normal,.zg-link-gray {
    color: #999;
    font-weight: 400;
}
.zg-link-gray{
    font-size: 12px;
}
.zg-link-gray:hover{
    text-decoration: underline;
    color: #698ebf;
}
.zg-right {
    float: right;
}
.question-link{
    color: #259;
}
h2{
    font-weight: 700;
    font-size:14px;
}
.question-link:hover{
    text-decoration: underline;
}
.explore-tab {
    margin-top: 10px;
}
.zg-anchor-hidden {
    top: -48px;
    position: relative;
    display: block;
    width: 0;
    font: 0/0 a;
}
.tab-navs {
    margin: 0 0 10px;
    padding: 0;
    text-align: center;
    list-style: none;
    height: 33px;
    border-bottom: 1px solid #ccc;
}
.tab-navs .tab-nav {
    position: relative;
    float: left;
    margin-right: 5px;
    margin-bottom: -1px;
}
.explore-tab .tab-navs .tab-nav.active{
    border-bottom: 2px solid #fff;
}
.explore-tab .tab-navs .tab-nav.active>a {
    color: inherit;
}
.explore-tab .tab-navs .tab-nav>a {
    color: #999;
}
.tab-navs .tab-nav.active>a {
    color: #666!important;
}
.tab-navs .tab-nav.active>a, html.no-touchevents .tab-navs .tab-nav.active>a:hover {
    background: #fff!important;
    border: 1px solid #ccc;
    border-bottom-color: transparent;
    cursor: default;
}
.tab-navs .tab-nav>a {
    display: block;
    padding: 5px 15px;
    min-width: 45px;
    color: #259;
    text-decoration: none;
    border: 1px solid transparent;
    border-radius: 2px 2px 0 0;
}
.explore-sidebar{
    position: absolute;
    float: right;
    margin:45px 0 0 10px;
    width: 270px;
    top: 25px;
    left: 960px;
}
</style>