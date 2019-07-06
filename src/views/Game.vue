<template>
  <div class="GameView container-fluid">
    <div class="row d-flex justify-content-center">
      <div class="col-3 d-flex justify-content-center" style="margin-bottom: 150px;">
        <button @click="consoleLog()" class="btn btn-block btn-lg btn-info">Attack</button>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <PlayerCard v-bind:hand="game.player.hand" />
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <OpponentCard v-bind:hand="game.opponent.hand" />
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
        console.log('console.log(', this.game.opponent.hand, ')')
      }
    }

  }
</script>


<style scoped>

</style>