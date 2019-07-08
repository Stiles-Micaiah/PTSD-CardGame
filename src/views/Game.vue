<template>
  <div class="GameView container-fluid">
    <div class="row">
      <div class="col-12">
        <h1>{{game.player.name}} VS {{game.opponent.name}}</h1>
      </div>
    </div>
    <div class="row d-flex justify-content-center">
      <div class="col-3 d-flex justify-content-center" style="margin-bottom: 150px;">
        <button @click="attackShizzie()" class="btn btn-block btn-lg btn-info">Attack</button>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <PlayerCard v-on:playerSelect="isPlayer" v-bind:hand="game.player.hand" />
      </div>
    </div>
    <div class="row d-flex justify-content-center">
      <div class="col-9">
        <OpponentCard v-on:opponentSelect="isOpponent" v-bind:hand="game.opponent.hand" />
      </div>
    </div>


  </div>
</template>


<script>
  import OpponentCard from '../components/OpponentCard';
  import PlayerCard from '../components/PlayerCard';

  export default {
    name: 'Game',
    props: ["id"],
    data() {
      return {
        attackObj: {
          playerCardId: "",
          opponentCardId: ""
        }
      }
    },
    mounted() {
      this.$store.dispatch('getGame', this.id)
    },
    computed: {
      game() {
        return this.$store.state.activeGame;
      }
    },
    components: {
      OpponentCard,
      PlayerCard
    },
    methods: {
      consoleLog() {
        console.log('console.log(', this.attackObj, ')')
      },
      attackShizzie() {
        let Shizzie = {
          attackses: this.attackObj,
          id: this.id
        }
        this.$store.dispatch('attackShizzie', Shizzie)
        this.$store.dispatch('getGame', this.id)
        clear()
        // this.$forceUpdate()
      },
      clear() {
        this.attackObj.playerCardId = ""
        this.attackObj.opponentCardId = ""
      },
      isPlayer(value) {
        this.attackObj.playerCardId = value
        console.log('you selected card' + this.attackObj.playerCardId)
      },
      isOpponent(value) {
        this.attackObj.opponentCardId = value
        console.log('your opponent selected' + this.attackObj.opponentCardId)
      }
    }

  }
</script>


<style scoped>

</style>