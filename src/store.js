import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router.js'
Vue.use(Vuex)

const api = axios.create({
  baseURL: "https://battlecardz.herokuapp.com/api/games"
})


export default new Vuex.Store({
  state: {
    games: [],
    activeGame: {},
    activeUser: ""
  },
  mutations: {
    setGames(state, data) {
      state.games = data
    },
    setActiveGame(state, data) {
      state.activeGame = data
    },
    setActiveUser(state, data) {
      state.activeUser = data
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
          commit('setActiveGame', res.data.data)
          commit('setActiveUser', res.data.data.player.name)
          if (res.data.data.winner) {
            if (res.data.data.winner == this.state.activeUser) {
              router.push({ name: 'winner', params: { isWinner: res.data.data.winner, img: "https://deow9bq0xqvbj.cloudfront.net/image-logo/2332469/winnerwinnerbanner.png" } })
            }
            else {
              router.push({ name: 'winner', params: { isWinner: res.data.data.winner, img: "https://i1.wp.com/axtschmiede.com/wp-content/uploads/2017/09/Get-rid-of-a-Loser-Mindset.jpg?fit=844%2C1181" } })

            }
          }
          console.log('getGame output', res, 'game obj', res.data.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    createGame({ commit, dispatch }, data) {
      api.post('', data)
        .then(res => {
          commit('setActiveGame', res.data.game)
          router.push({ name: 'game', params: { id: res.data.game.id } })
          console.log('createGame output', res, 'res.data.game is commited')
        })
        .catch(err => {
          console.error(err)
        })
    },
    attackShizzie({ commit, dispatch }, data) {
      api.put('' + data.id, data.attackses)
        .then(res => {
          console.log('updated game obj', res)
        })
        .catch(err => {
          console.error(err)
        })
    },
    restart({ commit, dispatch }) {
      router.push({ name: 'home' })
    }



  }
})
