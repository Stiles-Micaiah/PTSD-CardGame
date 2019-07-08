<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">

        <a v-for="nand in hand" :key="nand.id" class="btn btn-anchor col" v-on:click="sendopponent(nand.id)">
          <img v-if="!nand.visible" class="card-img-target"
            src="https://nicholmagouirk.typepad.com/.a/6a00d8341c6f8a53ef0133f2f5755e970b-800wi" alt="yeet">
          <div v-if="nand.visible" class="card bg-dark text-white d-flex">
            <img class="card-img-target" v-bind:src="nand.img" alt="yeet">
            <div class="card-img-overlay">
              <h5 class="card-title">Name:{{nand.name}}</h5>
              <p class="card-text">Attackses:{{nand.attack}}</p>
              <p class="card-text">Defense:{{nand.defense}}</p>
              <p class="card-text">Health:{{nand.health}}</p>

            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'opponentCard',
    props: ['hand'],
    data() {
      return {
        selectedopponent: ""
      }
    },
    methods: {
      sendopponent(data) {
        this.$emit('opponentSelect', data)
      }
    }
  }
</script>


<style scoped>
  .btn-anchor {
    height: 201px;
    width: 201px;
    margin: 10px;
    padding: 0%;
  }

  .btn-anchor:hover {
    transition: .3s linear;
    transform: scale(1.02);
    box-shadow: 5px 5px 5px fuchsia;
  }

  .card-img-target {
    height: 199px;
    width: 199px;
  }
</style>