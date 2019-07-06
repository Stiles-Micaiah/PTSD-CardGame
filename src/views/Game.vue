<template>
  <div class="GameView container-fluid">
    <div class="row d-flex justify-content-center">
      <div class="col-3 d-flex justify-content-center" style="margin-bottom: 150px;">
        <button @click="consoleLog()" class="btn btn-block btn-lg btn-info">Attack</button>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <OpponentCard hand="game.opponent.hand" />
      </div>
    </div>
    <div class="row" style="margin-bottom: 15vh;">
      <div class="col-3 d-flex justify-content-center">
        <a class="btn" style="height: 200px; width: 200px; padding: 0%;" href="#">
          <img style="height: 100%; width: 100%;" src="https://via.placeholder.com/200.png" alt="">
        </a>

      </div>
      <div class="col-3 d-flex justify-content-center">
        <a class="btn" style="height: 200px; width: 200px; padding: 0%;" href="#">
          <img style="height: 100%; width: 100%;" src="https://via.placeholder.com/200.png" alt="">
        </a>
      </div>
      <div class="col-3 d-flex justify-content-center">
        <a class="btn" style="height: 200px; width: 200px; padding: 0%;" href="#">
          <img style="height: 100%; width: 100%;" src="https://via.placeholder.com/200.png" alt="">
        </a>
      </div>
      <div class="col-3 d-flex justify-content-center">
        <a class="btn" style="height: 200px; width: 200px; padding: 0%;" href="#">
          <img style="height: 100%; width: 100%;" src="https://via.placeholder.com/200.png" alt="">
        </a>
      </div>
    </div>
    <div class="row">
      <div class="col-3 d-flex justify-content-center">
        <a class="btn" style="height: 200px; width: 200px; padding: 0%;" href="#">
          <img style="height: 100%; width: 100%;" src="https://via.placeholder.com/200.png" alt="">
        </a>
      </div>
      <div class="col-3 d-flex justify-content-center">
        <a class="btn" style="height: 200px; width: 200px; padding: 0%;" href="#">
          <img style="height: 100%; width: 100%;" src="https://via.placeholder.com/200.png" alt="">
        </a>
      </div>
      <div class="col-3 d-flex justify-content-center">
        <a class="btn" style="height: 200px; width: 200px; padding: 0%;" href="#">
          <img style="height: 100%; width: 100%;" src="https://via.placeholder.com/200.png" alt="">
        </a>
      </div>
      <div class="col-3 d-flex justify-content-center">
        <a class="btn" style="height: 200px; width: 200px; padding: 0%;" href="#">
          <img style="height: 100%; width: 100%;" src="https://via.placeholder.com/200.png" alt="">
        </a>
      </div>
    </div>

  </div>
</template>


<script>
  import OpponentCard from '../components/OpponentCard';

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
      OpponentCard
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