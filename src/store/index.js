import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// SET CONSTANT VARIABLES
const SET_CURRENTLYPLAYING = 'SET_CURRENTLYPLAYING'
const SET_SONGPLAYING = 'SET_SONGPLAYING'
const SET_STOPSONGPLAYING = 'SET_STOPSONGPLAYING'
const SET_AUDIOTRACK = 'SET_AUDIOTRACK'

const store = new Vuex.Store({
  state: {
    currentUser: 'Tyrion Lannister',
    currentlyPlaying: {
      title: '',
      artist: '',
      cover: '',
      file: ''
    },
    songPlaying: false,
    audioTrack: {}
  },
  actions: {
    ACTION_SET_CURRENTLYPLAYING: function ({commit}, payload) {
      commit(SET_CURRENTLYPLAYING, payload)
      commit(SET_SONGPLAYING)
    },
    ACTION_STOP_PLAYING: function ({commit}) {
      commit(SET_STOPSONGPLAYING)
    },
    ACTION_SET_AUDIOTRACK: function ({commit}, payload) {
      commit(SET_AUDIOTRACK, payload)
    },
    ACTION_NOTIFY: function ({state}) {
      // JS Notification API
      if (window.Notification && Notification.permission !== 'denied') {
        Notification.requestPermission(function (status) {  // status is "granted", if accepted by user
          return new Notification('Song Now Playing', {
            body: state.currentlyPlaying.title + ' is now playing!'
          })
        })
      }
    }
  },
  mutations: {
    SET_CURRENTLYPLAYING: (state, payload) => {
      state.currentlyPlaying = payload
    },
    SET_SONGPLAYING: state => {
      state.songPlaying = true
    },
    SET_STOPSONGPLAYING: state => {
      if (state.songPlaying) {
        state.songPlaying = false
        state.audioTrack.pause()
      }
    },
    SET_AUDIOTRACK: (state, payload) => {
      state.audioTrack = payload
    }
  },
  getters: {
    GET_CURRENTLYPLAYING: state => {
      return state.currentlyPlaying
    },
    GET_SONGPLAYING: state => {
      return state.songPlaying
    },
    GET_CURR_TRACK: state => {
      return state.audioTrack
    }
  }
})

export default store
