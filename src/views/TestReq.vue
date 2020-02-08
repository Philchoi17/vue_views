<template>
  <h1>test req</h1>
</template>
<script>
export default {
  created() {
    this.$store.dispatch('getCharacter', '1')
  }
}
</script>
<style scoped>

</style>