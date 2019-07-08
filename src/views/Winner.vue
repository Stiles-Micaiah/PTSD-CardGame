<template>
  <div class="">
    <h1>
      <span id="congrats">Congratulations </span><span id="winner">"{{isWinner}}"</span> <br>
      <span id="enjoy">Enjoy Your</span><span id="chicken"> Chicken</span>
    </h1>
    <button class="btn btn-success btn-lg btn-block" @click="tryAgain">Try Again?</button>
    <img class="banner" v-bind:src="img" v-bind:alt="img">
  </div>
</template>


<script>
  export default {
    name: '',
    props: ['isWinner', 'img'],
    methods: {
      tryAgain() {
        this.$store.dispatch('restart')
      },
      // computed: {
      //   activeUser() {
      //     return this.$store.state.activeUser;
      //   }
      // }
    }
  }
</script>


<style scoped>
  .banner {
    height: 600px;
    width: auto;
  }

  #congrats {
    font-size: 72px;
    background: -webkit-linear-gradient(rgb(0, 195, 255), rgb(0, 68, 255));
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  #winner {
    font-size: 72px;
    background: -webkit-linear-gradient(rgb(0, 68, 255), rgb(89, 0, 255));
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  #chicken {
    font-size: 72px;
    background: -webkit-linear-gradient(rgb(119, 0, 255), rgb(255, 0, 242));
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  #enjoy {
    font-size: 72px;
    background: -webkit-linear-gradient(rgb(47, 0, 255), rgb(0, 183, 255));
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
</style>