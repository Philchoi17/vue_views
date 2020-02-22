<template>
  <div>
    <!-- <h1 v-if='seen'>hello,world</h1>
    <button @click='seenNotSeen'>seen/not seen</button> -->
    <div v-for='(sport, index) in sportsArr' :key='index'>
      <h1>{{ sport.game }}</h1>
      <ul>
        <li>where: {{ sport.where }}</li>
        <li>equipment: 
          <ul>
            <li v-for='(e, index) in sport.equipment' :key='index' class='sportsEquipment'>
              {{ e }}
            </li>
          </ul>
        </li>
      </ul>
      <!-- <h1>{{ sport.where }}</h1>
      <h1>{{ sport.game }}</h1> -->
    </div>
    <h1>{{ testModel }}</h1>
    <input style='border:1px solid black;' type="text" v-model='testModel'>
    <router-link to='/styling'>to styling practice</router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      testModel: '',
      seen: true,
      sportsArr: [
        {
          where: 'field',
          game: 'soccer',
          equipment: ['ball']
        },
        {
          where: 'swimming pool',
          game: 'water polo',
          equipment: ['polo ball']
        },
        {
          where: 'field',
          game: 'baseball',
          equipment: ['bat', 'ball', 'glove', 'batter\'s helmet']
        }
      ]
    }
  },
  methods: {
    seenNotSeen() {
      if(this.seen) this.seen = false
      else this.seen = true
    }
  }
}
</script>
<style scoped>
  div {
    border: 1px solid black
  }
  .sportsEquipment {
    font-size: 8px;
  }
</style>
