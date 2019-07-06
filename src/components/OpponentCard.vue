<template>
  <div class="OpponentCard">
    <a v-for="card in cards" :key="card.id" class="btn" style="height: 200px; width: 200px; padding: 0%;" href="#">
      <img style="height: 100%; width: 100%;" src="card.img" alt="">
    </a>
  </div>
</template>


<script>
  export default {
    name: 'Card',
    props: ['cards']
  }
</script>


<style scoped>

</style>