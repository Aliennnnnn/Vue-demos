<template>
<div>   
     <div class="top-story-feed-list">
        <div class="feed-item feed-item-hide" v-for="(item,index) in arr">         
                <div class="feed-item-inner">
                    <div class="avatar">
                            <a v-if="item.avatar" href="javascript:;" class="feed-item-avatar">
                                <img :src="item.avatar" />
                            </a>
                        </div>
                        <div class="feed-main">
                            <div v-if="item.collectLink" class="feed-source">
                                <a :href="item.collectLink">{{ item.source }}</a> 收藏了回答
                                <span class="feed-null">·</span>
                                <span class="feed-time">{{ item.time }} 小时前</span>
                            </div>
                            <div class="feed-content">
                                <h2 class="feed-title" id="feed-title">
                                    <a class="question-link" :href="item.titleLink">{{ item.title }}</a>
                                </h2>
                                <div class="feed-question-detail-item">
                                    <div class="expandable entry-body">
                                        <div class="zm-item-vote">
                                            <a :class="{ 'voteCounted': item.likeToggle}" @click="addLike(item,index)" class="zm-item-vote-count" href="javascript:;">{{ item.voteCount }}</a>
                                        </div>
                                        <div class="zm-votebar">
                                            <button class="up">
                                                <i class="icon vote-arrow"></i>
                                                <spanclass="count">{{ item.voteCount }}</span>
                                                <span class="label sr-only">赞同</span>
                                            </button>
                                            <button class="down">
                                                <i class="icon vote-arrow"></i>
                                                <span class="count"></span>
                                                <span class="label sr-only">反对，不会显示你的姓名</span>
                                            </button>
                                        </div>
                                        <div class="zm-item-answer-author-info">
                                            <span class="summary-wrapper">
                                                <span class="author-link-line">
                                                    <a class="author-link" href="https://www.zhihu.com/people/ti-ti-11-48">{{ item.author }}</a>
                                                </span>
                                                <span :title="item.bioTitle" class="bio">
                                                    {{ item.bio }}
                                                </span>
                                            </span>
                                        </div>
                                        <div class="zm-item-vote-info">
                                            <span class="voters text">
                                                <a href="javascript:;" class="more text">
                                                    <span class="js-voteCount">13084</span>
                                                    "&nbsp;人赞同"
                                                </a>
                                            </span>
                                        </div>
                                        <div class="zm-item-rich-text expandable">
                                            <div v-if="(index == showIndex)">
                                                <div class="rich-text">                                 
                                                    <div v-html="item.richText"></div>                                  
                                                </div>
                                            </div>
                                            <textarea class="content" hidden>
                                                
                                            </textarea>
                                            <div v-if="!(index == showIndex)" class="summary-wrap">
                                                <div class="zh-summary summary clearfix">
                                                    <img :src="item.smallPicSrc" v-if="item.smallPic" class="inline-img"  height="112" width="200">
                                                    {{ item.summary }}
                                                    <a href="javascript:;" class="toggle-expand" @click="showIndex = index">显示全部</a>
                                                </div>
                                            </div>
                                            <p class="visible-expanded">
                                                <a class="answer-date-link meta-item" href="https://www.zhihu.com/question/33947484/answer/58880916">
                                                    编辑于 {{ item.editorTime }}
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="feed-meta">
                                        <div class="zm-item-meta answer-actions">
                                            <div class="zm-meta-panel">
                                                <a href="javascript:;" class="follow-link zg-follow meta-item">
                                                    <i class="z-icon-follow"></i>
                                                    关注问题
                                                </a>
                                                <a href="javascript:;" class="meta-item toggle-comment">
                                                    <i class="z-icon-comment"></i>
                                                    {{ item.commentCount }}条评论
                                                </a>
                                                <a href="javascript:;" class="meta-item zu-autohide js-thank">
                                                    <i class="z-icon-thank"></i>感谢
                                                </a>
                                                <a href="javascript:;" class="meta-item zu-autohide goog-menu-button js-share">
                                                    <div class="goog-inline-block goog-menu-button-outer-box">
                                                        <div class="goog-inline-block goog-menu-button-inner-box">
                                                            <div class="goog-inline-block goog-menu-button-caption">
                                                                <i class="z-icon-share"></i>分享
                                                            </div>
                                                            <div class="goog-inline-block goog-menu-button-dropdown">&nbsp;</div>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="javascript:;" class="meta-item zu-autohide js-collect">
                                                    <i class="z-icon-collect"></i>收藏
                                                </a>
                                                <span class="zg-bull zu-autohide">•</span>
                                                <a href="javascript:;" class="meta-item zu-autohide js-noHelp">没有帮助</a>
                                                <span class="zg-bull zu-autohide">•</span>
                                                <a href="javascript:;" class="meta-item zu-autohide js-report">举报</a>
                                                <span class="zg-bull">•</span>
                                                <a href="https://www.zhihu.com/terms#sec-licence-1" class="meta-item copyright">作者保留权利</a>
                                                <button v-if="(showIndex == index)" @click="showIndex = null" class="meta-item item-collapse js-collapse">
                                                    <i class="z-icon-fold"></i>
                                                    收起
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="javascript:;" data-tooltip="不感兴趣." class="ignore zu-autohide"></a>
                                </div>
                            </div>
                        </div>
                                </div>
                <div class="undo-dislike-options">
                    此内容不会再动态中再次显示
                    <span class="zg-bull">·</span>
                    <a href="javascript:;" class="meta-item revert">撤销</a>
                    <a href="javascript:;" class="ignore zu-autohide close"></a>
                </div>              
        </div>
        <div class="bottomLine">
            —————————————————————我是有底线的—————————————————————
            
        </div>
    </div>
</div>
</template>

<script type="text/javascript">
export default{
    props: ['arr'],
    data(){
        return{
            showIndex: null,
            loadIndex: 1
        }
    },
    methods: {
        addLike(item,index){   
            //每次触发addLike事件都会重新从db.json里读取原来的item.voteCount
            //所以只能再写一个voteCounts === voteCount
            //暂时没有更好的解决办法                
            if(item.voteCount == item.voteCounts){
                item.voteCount += 1;
            }else{
                item.voteCount -= 1;
            }
            item.likeToggle = !item.likeToggle
        }
    }
}
</script>

<style scoped>
.feed-item{
    padding: 10px 0;
    position: relative;
    margin-left: 0;
    outline: 0;
    border-top: 1px solid #eee;
}
.top-story-feed-list div:first-child{
    border-top: none;
}
.top-story-feed-list:first-child.{
    border-top: 1px solid #ccc;
}
.feed-item .avatar{
    display: block;
    width: 38px;
    height: 38px;
    float: left;
    margin: 3px 0 0;
}
.feed-item .avatar a,.feed-item .avatar img{
    display: block;
    width: 38px;
    height: 38px;
    border-radius: 3px;
}
.feed-main{
    margin-left: 48px;
}
.feed-source,.feed-source a{
    color: #999;
}
.feed-source a:hover{
    color: #259;
    text-decoration: underline;
}
.feed-title{
    display: block;
    font-size: 1.5em;
    font-weight: bold;
    margin-right: 20px;
    font-weight: 700;
    font-size: 14px;
    outline: 0;
}
.feed-content .feed-title{
   
}
.question-link{
    -webkit-tap-highlight-color: rgba(225,225,225,.5);
    color: #259;
}
.question-link:hover{
    text-decoration: underline;
}
.feed-question-detail-item{

}
.toggle-expand{
    margin-bottom: 5px;
    text-decoration: none;
    color: #999;
    font-size: 13px;
    padding: 0;
    display: none;
    border-radius: 2px;
}
.toggle-expand span{
    font-size: 12px;
    color: #259;
    padding: 3px;
    border-radius: 2px;
}
.zh-summary .toggle-expand{
    display: inline-block;
    padding: 0 3px;
    border-radius: 2px;
    font-size: .9em;
    color:#259;
}
.question-description{
    display: none;
    padding-bottom: 6px;
}
.feed-item .entry-body{
    position: relative;
    margin-top: 3px;
}
.zm-item-vote{
    display: block;
    margin-top: -1px;
    position: absolute;
    left: -48px;
}
.zm-item-vote-count{
    display: block;
    color: #698ebf;
    height: 24px;
    line-height: 24px;
    width: 38px;
    border-radius: 3px;
    border: 0;
    cursor: pointer;
    background: #eff6fa;
    font-weight: 700;
    font-weight: 500;
    text-align: center;
    text-decoration: none;
    overflow: hidden;
    -webkit-text-size-adjust: none;
}
.zm-item-vote-count:hover{
    background-color: #698ebf;
    color: #fff;
}
.voteCounted{
    background-color: #698ebf;
    color: #fff;
}
.zm-votebar{
    float: left;
    margin-left: -48px;
    display: none;
    margin-top: -1px;
}
.zm-votebar .up {
    padding-top: 18px;
    height: 44px;
}
.zm-votebar .up, .zm-votebar .down {
    display: block;
    color: #698ebf;
    height: 24px;
    line-height: 24px;
    width: 38px;
    border-radius: 3px;
    border: 0;
    cursor: pointer;
    background: #eff6fa;
    font-weight: 700;
    font-weight: 500;
    text-align: center;
    position: relative;
}
.zm-votebar .down {
    margin: 5px 0 0;
}
.zm-votebar .up .vote-arrow {
    position: absolute;
    top: 11px;
    left: 50%;
    margin-left: -6px;
    border-top-width: 0;
    border-bottom-color: #698ebf;
    border-top-style: solid;
}
.zm-votebar .vote-arrow {
    width: 0;
    height: 0;
    border: 6px solid transparent;
    font-size: 0;
    _border-style: dashed;
    background-image: none;
    background-repeat: no-repeat;
    display: inline-block;
    vertical-align: middle;
}
.zm-votebar .count {
    display: block;
}
.zm-votebar .label {
    bottom: 1px;
}
.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0,0,0,0);
    border: 0;
}
.zm-votebar .down .vote-arrow {
    border-bottom-width: 0;
    border-top-color: #698ebf;
}
.feed-item .zm-item-vote-info, .feed-item .zm-item-answer-author-info {
    margin-bottom: 2px;
}
.zm-item-answer-author-info {
    margin: 0 0 1px;
}
.zm-item-answer-author-info .summary-wrapper {
    display: inline-block;
    vertical-align: middle;
}
.summary-wrapper {
    width: 100%;
    max-width: 460px;
    color: #999;
    word-wrap: normal;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.summary-wrapper .author-link-line, .summary-wrapper .badge-summary {
    color: #222;
}
.zm-item-answer-author-info .author-link {
    font-weight: 700;
}
.zm-item-answer-author-info a {
    color: inherit;
}
.author-link-line+.bio {
    color: #999;
}
.zm-item-answer-author-info .bio {
    margin: 3px 0;
    color: #999;
}
.feed-item .zm-item-vote-info, .feed-item .zm-item-answer-author-info {
    margin-bottom: 2px;
}
.entry-body .zm-item-vote-info, .entry-body .full-content, .zm-item-answer .zm-votebar, .zm-item-feed .zm-votebar, .zm-item-answer .zm-item-vote-info, .zm-item-feed .zm-item-vote-info {
    display: none;
}
.zm-item-vote-info {
    margin: 3px 0;
    color: #999;
    font-size: 0;
}
.zm-item-vote-info .voters {
    display: inline;
}
.zm-item-vote-info .text {
    font-size: 12px;
}
.zm-item-vote-info .text {
    font-size: 12px;
}
.zm-item-vote-info a {
    color: inherit;
    font-size: inherit;
}
.zm-item-vote-info .voters .js-voteCount {
    text-decoration: inherit;
}
.zm-item-vote-info .voters span {
    display: inline-block;
    white-space: nowrap;
}
[hidden] {
    display: none!important;
}
textarea {
    border: 0;
    border: 0;
    -moz-outline: 0;
    outline: 0;
    overflow: auto;
    resize: none;
    -webkit-appearance: none;
}
.zh-summary {
    -webkit-tap-highlight-color: rgba(225,225,225,.5);
    position: relative;
    cursor: pointer;
}
.clearfix {
  overflow: auto;
  zoom: 1;
}
a.toggle-expand, .summary-tail-button, .CardAdFeed-button {
    display: none;
    padding: 0 3px;
    border-radius: 2px;
    font-size: .9em;
}
.expandable .visible-expanded {
    display: none;
}
.zm-item-rich-text p, .zm-editable-content p, .editable p, .zm-item-rich-text h2, .zm-editable-content h2, .editable h2 {
    margin: 12px 0;
}
/*.zm-item-rich-text .rich-text{
    display: none;
}*/
.rich-text img{
    width: 584px;
}
.meta-item:first-child, .zg-bull+.meta-item {
    margin-left: 0;
}
div[contentEditable], input, textarea, button, a:link {
    -webkit-tap-highlight-color: rgba(225,225,225,.5);
}
.meta-item {
    margin-left: 7px;
    color: #999;
}
.feed-item .zm-item-meta {
    margin-bottom: 0;
}
.zm-item-meta {
    position: relative;
    margin-bottom: 5px;
}
.zm-item-meta .zm-meta-panel {
    background: transparent;
}
.zm-meta-panel {
    padding: 5px 0;
    margin-bottom: -5px;
    background: #fff;
}
.feed-content:hover .zu-autohide{
    display: inline-block;
}
.zm-meta-panel .zg-follow {
    color: #999;
}
.zm-meta-panel .meta-item:hover{
    color: #698ebf;
    text-decoration: underline;
}
.zm-meta-panel .zg-follow:hover{
    color: #259;
    text-decoration: underline;
}
.meta-item:first-child, .zg-bull+.meta-item {
    margin-left: 0;
}
.zm-meta-panel>a, .zm-meta-panel>span {
    color: #999;
    vertical-align: middle;
}
i[class^=z-icon-], i[class*=" z-icon-"] {
    display: inline-block;
    line-height: 10px;
    vertical-align: 0;
    background-image: url(../../assets/img/sprites-1.png);
    background-repeat: no-repeat;
    margin-right: 5px;
}
.z-icon-follow {
    width: 8px;
    height: 9px;
    background-position: -97px -23px;
}
.z-icon-comment {
    width: 9px;
    height: 10px;
    background-position: -28px -22px;
}
.z-icon-thank {
    width: 10px;
    height: 10px;
    background-position: -41px -22px;
}
.zu-autohide {
    display: none;
}
.goog-inline-block.zu-autohide {
    display: none;
    position: relative;
}
.goog-inline-block {
    display: inline-block;
    position: relative;
}
.z-icon-share {
    width: 11px;
    height: 10px;
    background-position: -67px -22px;
}
.goog-menu-button .goog-menu-button-dropdown {
    display: none;
}
.z-icon-collect {
    width: 7px;
    height: 10px;
    background-position: -56px -22px;
}
.zg-bull {
    padding: 0 3px;
    color: #BBB;
    font-family: Arial;
}
.meta-item:first-child, .zg-bull+.meta-item {
    margin-left: 0;
}
.item-collapse {
    margin: 0;
    padding: 1px 6px 0;
    background: 0 0;
    border: 0;
    border-radius: 3px;
    outline: 0;
    cursor: pointer;
    -webkit-transition: background-color .2s,visibility .2s,opacity .2s,-webkit-transform .2s;
    transition: background-color .2s,visibility .2s,opacity .2s,-webkit-transform .2s;
    transition: background-color .2s,visibility .2s,opacity .2s,transform .2s;
    transition: background-color .2s,visibility .2s,opacity .2s,transform .2s,-webkit-transform .2s;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
.item-collapse:hover{
    color: #698ebf;
}
.z-icon-fold {
    width: 8px;
    height: 9px;
    background-position: -135px -22px;
}
.zh-general-list.topstory .feed-meta .ignore {
    top: 11px;
    color:#fff;
}
.feed-item .ignore {
    position: absolute;
    right: 0;
    top: 35px;
    display: inline-block;
    text-indent: -9999px;
    width: 20px;
    height: 20px;
    background-image: url(../../assets/img/sprites-1.png);
    background-repeat: no-repeat;
    background-position: -261px -62px;
}
.feed-item .ignore:hover {
    background-position: -261px -42px;
}
.feed-item .undo-dislike-options {
    margin-left: 48px;
    position: relative;
    display: none;
    color: #999;
}
.feed-item .undo-dislike-options .close {
    position: absolute;
    right: 0;
    top: 0;
    display: inline-block;
    text-indent: -9999px;
    width: 20px;
    height: 20px;
    background-image: url(../../assets/img/sprites-1.png);
    background-repeat: no-repeat;
    background-position: -261px -62px;
    opacity: 1;
    -ms-filter: "alpha(Opacity=100)";
}
.feed-item .ignore {
    position: absolute;
    right: 0;
    top: 35px;
    display: inline-block;
    text-indent: -9999px;
    width: 20px;
    height: 20px;
    background-image: url(../../assets/img/sprites-1.png);
    background-repeat: no-repeat;
    background-position: -261px -62px;
}
.summary .inline-img{
    float: left;
    height: 112px;
    width: 200px;
    border-radius: 4px;
    margin: 1px 10px 5px 0;
    cursor: pointer;
}
.expandable>.showAll{
    display: block;
}
.expandable .summary-wrap .showAll{
    display: none;
}
.feed-meta .showAll{
    display: inline-block;
}
[data-tooltip] {
  position: relative;
  z-index: 2;
  cursor: pointer;
}

/* Hide the tooltip content by default */
[data-tooltip]:before,
[data-tooltip]:after {
  visibility: hidden;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
  filter: progid: DXImageTransform.Microsoft.Alpha(Opacity=0);
  opacity: 0;
  pointer-events: none;
}

/* Position tooltip above the element */
[data-tooltip]:before {
  position: absolute;
  bottom: 120%;
  left: 250%;
  margin-bottom: 5px;
  margin-left: -80px;
  padding: 7px;
  width: 40px;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
  background-color: #000;
  background-color: hsla(0, 0%, 20%, 0.9);
  color: #fff;
  content: attr(data-tooltip);
  text-align: center;
  font-size: 14px;
  line-height: 1.2;
}

/* Triangle hack to make tooltip look like a speech bubble */
[data-tooltip]:after {
  position: absolute;
  bottom: 120%;
  left: 50%;
  margin-left: -5px;
  width: 0;
  border-top: 5px solid #000;
  border-top: 5px solid hsla(0, 0%, 20%, 0.9);
  border-right: 5px solid transparent;
  border-left: 5px solid transparent;
  content: " ";
  font-size: 0;
  line-height: 0;
}

/* Show tooltip content on hover */
[data-tooltip]:hover:before,
[data-tooltip]:hover:after {
  visibility: visible;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
  filter: progid: DXImageTransform.Microsoft.Alpha(Opacity=100);
  opacity: 1;
}
.bottomLine{
    color: #999;
    margin-top: 30px;
}
</style>