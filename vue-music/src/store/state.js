import {playMode} from '../common/js/config.js'

//state只存放那些最基础的数据
//所有可以被计算而来的数据都放在getters里面
const state = {
	singer: {},
    //正在播放
    playing: false,
    //播放界面全屏
    fullScreen: false,
    //播放列表(顺序播放/随机播放)
    playlist: [],
    //原始的播放列表(和顺序播放列表相同)
    sequenceList: [],
    //播放模式
    mode: playMode.sequence,
    //当前播放的索引
    currentIndex: -1,
    //歌单
    disc: {},
    //排行榜
    topList: {}
}

export default state

 