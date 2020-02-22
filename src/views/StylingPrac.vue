<template>
  <div>
    <h1>{{ this.$store.state.title }}</h1>

    <h1>styling</h1>
    <h4>{{ testModel }}</h4>
    <h4>length of string: {{ inputToUppercase }}</h4>
    <v-text-field v-model='testModel' />
    <router-link to='/'>home</router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      testModel: ''
    }
  },
  computed: {
    inputToUppercase() {
      return this.testModel.length
    }
  }
}
</script>