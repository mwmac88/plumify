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
      cover: ''
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
      state.songPlaying = false
    },
    SET_AUDIOTRACK: (state, payload) => {
      let audio = new Audio(payload)
      state.audioTrack = audio
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
