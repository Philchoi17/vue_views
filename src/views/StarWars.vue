<template>
  <div>
    <h1>{{ this.$store.state.title }} characters</h1>
    <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
        <v-flex 
          xs4 sm4 md4 lg4 
          v-for='(character, index) in this.$store.state.characters' 
          :key='index'
        >
          <v-card dark color="primary">
            <v-card-title primary-title>
              <h3 class="headline mb-0">{{ character }}</h3>
            </v-card-title>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <v-btn @click='getCharacter'>get character</v-btn>
    <br><br>
    <router-link to='/'>home</router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    getCharacter() {
      this.$store.dispatch('getCharacter', '1')
    }
  }
}
</script>
