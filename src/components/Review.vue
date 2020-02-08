<template>
  <div>
    <h1  v-if='seen' :title='hoverMsg'>{{ message }}</h1>
    <button class='button-method' @click='seenUnseen'>seen/unseen</button>
    <h6 v-for='(name, index) in names' :key='index'>
      {{ name }}
      {{ index+1 }}
    </h6>
    <h4>{{ newName }}</h4>
    <input class='border' v-model='newName' type="text">
    <button class='button-method' @click='addName'>
      add Name
    </button>
    <br>
    <router-link to='/'> Go home</router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: 'Let\'s learn Vue.js',
      hoverMsg: 'you are hovering',
      seen: true,
      names: ['adel', 'alex', 'kelly', 'sawyer', 'sungjee'],
      newName: ''
    }
  },
  methods: {
    seenUnseen() {
      if(this.seen) this.seen = false
      else this.seen = true
    },
    addName() {
      this.names.push(this.newName)
    }
  }
}
</script>
<style scoped>
  .button-method {
    border: 1px solid black;
  }
  .border {
    border: 1px solid black;
  }
</style>