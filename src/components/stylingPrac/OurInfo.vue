<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex 
        xs4 sm4 md4 lg4
        v-for='(i, index) in detailsInfo'
        :key='index'
      >
        <v-card class='setCardHeight'>
          <v-card-title>{{ i.header }}</v-card-title>
          <v-card-text>{{ i.text }}</v-card-text>
          <v-card-actions>
            <a :href="i.url"><v-btn text>Button</v-btn></a>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      detailsInfo: [
        {
          header: 'Vue Class',
          text: 'learning vuetify, v-router, and axios requests, and vuex global state management',
          url: 'http://www.philthylove.com'
        },
        {
          header: 'W Coding',
          text: 'Seoul\'s Best Coding bootcamp, Contact Them',
          url: 'https://www.wcoding.com'
        },
        {
          header: 'Code Seoul',
          text: 'Putting on Best free coding events in Seoul',
          url: 'https://www.codeseoul.com'
        },
      ]
    }
  }
}
</script>
<style scoped>
  .setCardHeight {
    height: 150px;
  }
</style>