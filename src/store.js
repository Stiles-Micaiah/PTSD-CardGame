import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const api = axios.create({
  baseURL: "https://battlecardz.herokuapp.com/api/games"
})


export default new Vuex.Store({
  state: {
    games: [],
    activeGame: {}
  },
  mutations: {
    setGames(state, data) {
      state.games = data
    },
    setActiveGame(state, data) {
      state.activeGame = data
    }

  },
  actions: {
    getGames({ commit, dispatch }) {
      api.get('')
        .then(res => {
          commit('setGames', res.data)
          console.log(res)
        })
        .catch(ree => {
          console.error(ree)
        })
    },
    getGame({ commit, dispatch }, id) {
      api.get('' + id)
        .then(res => {
          commit('activeGame', res.data)
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    },
    createGame({ commit, dispatch }, data) {
      api.post('', data)
        .then(res => {
          commit('setActiveGame', res)
          console.log('createGame output', res)
        })
        .catch(err => {
          console.error(err)
        })
    }



  }
})
