<template>
	<div>
		<div class="homer-entry-inner">
			<div class="home-entry-avatar">
				<img src="../../assets/img/my-avatar.jpg" height="50" width="50">
			</div>
			<div class="home-entry-box">
				<span class="home-entry-box-arrow"></span>
				<ul class="home-entry-list">
					<li class="home-entry-item">
						<a  @click="askClick()" href="#" class="home-entry-question">
							<i class="sprite-home-question-off"></i>
							提问
						</a>
					</li>
					<li class="home-entry-item">
						<a href="https://www.zhihu.com/question" class="home-entry-answer">
							<i class="sprite-home-answer-off"></i>
							回答
						</a>
					</li>
					<li class="home-entry-item">
						<a href="https://zhuanlan.zhihu.com/write" class="home-entry-post">
							<i class="sprite-home-post-off"></i>
							写文章
						</a>
					</li>
				</ul>
				<div class="home-entry-draft">
					<a href="#">草稿</a>
				</div>
			</div>
		</div>
		<my-dialog :is-show="isShowDialog" @on-close="closeDialog()"></my-dialog>
	</div>
</template>
<script type="text/javascript">
import myDialog from './dialog.vue'
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
.home-entry-inner{
	
}
.home-entry-avatar{
	float: left;
    width: 38px;
}
.home-entry-avatar img{
	display: block;
    width: 38px;
    height: 38px;
    border-radius: 3px;
    background-color: #eee;
}
.home-entry-box{
	margin-left: 58px;
    height: 48px;
    line-height: 48px;
    background: #fafafa;
    border: 1px solid #f0f0f0;
    border-radius: 4px;
    position: relative;
}
.home-entry-box-arrow{
	width: 10px;
    height: 10px;
    overflow: hidden;
    position: absolute;
    left: -10px;
    top: 10px;
}
.home-entry-list{
	float: left;
}
.home-entry-item{
	list-style: none;
    float: left;
    padding: 0 32px 0 27px;
    position: relative;
    font-size: 14px;
}
.home-entry-item a{
	color: #6c829f;
    display: inline-block;
}
.home-entry-item a:hover{
	color:#259;
}
.home-entry-item i{
	display: inline-block;
    vertical-align: middle;
    background-image: url(../../assets/img/sprites-2.png);
    background-repeat: no-repeat;
    font-style: italic;
    width: 24px;
    height: 24px;
}
.sprite-home-question-off{
	background-position: -148px -30px;
}
.sprite-home-answer-off{
	background-position: -96px -30px;
}
.sprite-home-post-off{
	background-position: -122px -56px;
}
.home-entry-item:hover .sprite-home-question-off{
	background-position: -122px -30px;
}
.home-entry-item:hover .sprite-home-answer-off{
	background-position: -96px -56px;
}
.home-entry-item:hover .sprite-home-post-off{
	background-position: -174px -30px;
}
.home-entry-draft{
	float: right;
    margin-right: 20px;
    line-height: 49px;
}
.home-entry-draft a{
	text-decoration: none;
    color: #999;
}
.home-entry-draft a:hover{
	color: #1d7fe2;
}
</style>
