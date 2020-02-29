<template>
  <div class="home">
    <h1>{{ this.$store.state.title }}</h1>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <router-link to='/about'>about</router-link> |
    <router-link to='/test'>test</router-link> | 
    <router-link to='/review2'>review2</router-link> | 
    <router-link to='/styling'>styling</router-link> |
    <router-link to='/starwars'>starwars</router-link> |
    <router-link to='/review3'>review3</router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
