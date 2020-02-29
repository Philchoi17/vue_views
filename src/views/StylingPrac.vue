<template>
  <v-content>
    <v-container>
      <v-app-bar color="deep-purple accent-4" dense dark>
        <!-- where the title is shown within navbar in top left -->
        <v-toolbar-title>Vue Views</v-toolbar-title>
        <!-- spacing between title and butons on right side -->
        <v-spacer />
        <!-- *buttons on right side**** -->
        <v-btn icon to='/'>
          <v-icon>mdi-home</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-cellphone</v-icon>
        </v-btn>
        <!-- *end of butons on right side**** -->
      </v-app-bar>
      <!-- where the carousel is under the app bar -->
      <top-carousel />
      <!-- company info -->
      <styling-prac-our-info />
    </v-container>
  </v-content>
</template>
<script>
import TopCarousel from '@/components/stylingPrac/TopCarousel'
export default {
  data() {
    return {
      anyStr: 'testClass',
      // testModel: ""
    };
  },
  // computed: {
  //   inputToUppercase() {
  //     return this.testModel.length;
  //   }
  // },
  components: {
    TopCarousel
  }
};
</script>
<style scoped>

</style>