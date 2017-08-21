import * as types from '../store/mutation-types.js'
import {playMode} from '../common/js/config.js'
import {shuffle} from '../common/js/util.js'

function findIndex(list, song){
    return list.findIndex((item) => {
        return item.id == song.id
    })
}

export const selectPlay = function({commit,state},{list,index}){
    commit(types.SET_SEQUENCE_LIST, list)
    if (state.mode === playMode.random){
        let randomList = shuffle(list)
        commit(types.SET_PLAYLIST,randomList)
        index = findIndex(randomList, list[index])
    }else{
        commit(types.SET_PLAYLIST,list)
    }
    commit(types.SET_PLAYLIST, list)
    commit(types.SET_CURRENT_INDEX, index)
    commit(types.SET_FULL_SCREEN, true)
    commit(types.SET_PLAYING_STATE, true)
}

export const randomPlay = function({commit},{list}){
    commit(types.SET_PLAY_MODE, playMode.random)
    commit(types.SET_SEQUENCE_LIST, list)
    let randomList = shuffle(list)
    commit(types.SET_PLAYLIST,randomList)
    commit(types.SET_CURRENT_INDEX,0)
    commit(types.SET_FULL_SCREEN,true)
    commit(types.SET_PLAYING_STATE,true)
}

export const insertSong = function ({commit, state}, song){
    let playlist = state.playlist
    let sequenceList = state.sequenceList
    let currentIndex = state.currentIndex
    //记录当前歌曲
    let currentSong = playlist[currentIndex]
    let fpIndex = findIndex(playlist, song)
    //因为是插入歌曲，所以索引要加一
    currentIndex++
    //插入这首歌到当前索引位置
    playlist.splice(currentIndex,0,song)
}