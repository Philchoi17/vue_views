<template>
  <div>
    <router-link to='/'>home</router-link>
    <div>
      <h1 v-if='shownSeen == 1'>this 1</h1>
      <h1 v-if='shownSeen == 2'>this is 2</h1>
      <h1 v-if='shownSeen == 3'>this is 3</h1>
      <!-- <h1 v-else>we are in the else</h1> -->
      <button @click='makeSeen' class='btn-vue'>appear/dissapear</button>
    </div>
    <div>
      <ul>
        <li v-for='(i, index) in names' :key='index'>
          {{ i.name }} <br>
          {{ i.hairColor }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: 'Hello, Vue',
      conditionMsg: 'whatever',
      seen: [1, 2, 3],
      shownSeen: 1,
      chosen: 1,
      names: [
        {
          name: 'Simon',
          hairColor: 'black'
        },
        {
          name: 'Majid',
          hairColor: 'black'
        },
        {
          name: 'Alex',
          hairColor: 'black'
        },
        {
          name: 'Kelly',
          hairColor: 'brownish black'
        }
      ]
    }
  },
  methods: {
    makeSeen() {
      this.shownSeen++
      // this.seen ? this.seen = false : true
      // if(this.seen) this.seen = false
      // else this.seen = true
    }
  }
}
</script>
<style scoped>
  .btn-vue {
    border: 1px solid black;
  }
</style>