<template>
  <div class="home d-flex justify-content-center">
    <div style="height: 300px; width: 300px;" class="card bg-dark text-white">
      <img src="https://via.placeholder.com/300.png" class="card-img" alt="...">
      <div class="card-img-overlay">
        <h5 class="card-title">Card title</h5>


        <div class="form-group">
          <form @submit.prevent="startGame">
            <input id="name" required="true" class="form-control" type="text" v-model="startGameInfo.playerName"
              placeholder="Enter Your Name">
            <select required='true' v-model="startGameInfo.set" class="custom-select">
              <!-- <option selected="">Select Card Set</option> -->
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
              <option value="4">Four</option>
            </select>
            <button class="btn btn-sm btn-primary" type="submit">Play</button>
          </form>
        </div>


      </div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src

  export default {
    name: 'Home',
    data() {
      return {
        startGameInfo: {
          playerName: "",
          set: ""
        }
      }
    },
    mounted() {
      this.$store.dispatch("getGames");
    },
    methods: {
      startGame(data) {
        this.$store.dispatch('createGame', this.startGameInfo)
        console.log('startGame form output', this.startGameInfo)
      }
    }
  }
</script>