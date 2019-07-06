<template>
  <div class="">
    <a v-for="nand in hand" :key="nand.id" class="btn" style="height: 200px; width: 200px; padding: 0%;" href="#">
      <div class="card bg-dark text-white">
  <img style="height: 100%; width: 100%;" v-bind:src="nand.img" alt="yeet">
  <div class="card-img-overlay">
    <h5 class="card-title">Name:{{nand.name}}</h5>
    <p class="card-text">Attackses:{{nand.attack}}</p>
    <p class="card-text">Defense:{{nand.defense}}</p>
        <p class="card-text">Health:{{nand.health}}</p>

  </div>
</div>
    </a>
  </div>
</template>


<script>
  export default {
    name: 'PlayerCard',
    props: ['hand']
  }
</script>


<style scoped>

</style>