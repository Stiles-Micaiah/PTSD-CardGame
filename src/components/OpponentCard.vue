<template>
  <div class="">
    <a v-for="nand in hand" class="btn" style="height: 200px; width: 200px; padding: 0%;" href="#">
      <img style="height: 100%; width: 100%;" v-bind:src="nand.img" alt="yeet">
    </a>
  </div>
</template>


<script>
  export default {
    name: 'OpponentCard',
    props: ['hand']
  }
</script>


<style scoped>

</style>