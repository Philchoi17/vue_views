<template>
  <div>
    <h1>col</h1>
    <v-row
      class="mb-6"
      no-gutters
    >
      <v-col class='col-borders'>1</v-col>
    </v-row>
    <v-row
      class="mb-6"
      no-gutters
    >
      <v-col class='col-borders'>1</v-col>
      <v-col class='col-borders'>2</v-col>
    </v-row>
    <v-row
      class="mb-6"
      no-gutters
    >
      <v-col class='col-borders'>1</v-col>
      <v-col class='col-borders'>2</v-col>
      <v-col class="col-borders">3</v-col>
    </v-row>
    <v-row class="mb-6" no-gutters>
      <v-col class="col-borders">1</v-col>
      <v-col class="col-borders">2</v-col>
      <v-col class="col-borders">3</v-col>
      <v-col class="col-borders">4</v-col>
    </v-row>
    <v-row
      class="mb-6"
      no-gutters
    >
      <v-col class='col-borders' col-2>1</v-col>
      <v-col class='col-borders' col-2>2</v-col>
      <v-col class='col-borders' col-2>3</v-col>
      <v-col class='col-borders' col-2>4</v-col>
      <v-col class='col-borders' col-2>5</v-col>
      <v-col class='col-borders' col-2>6</v-col>
    </v-row>
    <v-divider />
    <h1>flex</h1>
    <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
        <v-flex xs12 sm12 md12 lg12>
          <v-card dark color="primary">
            <v-card-title primary-title>
              <h3 class="headline mb-0">flex card</h3>
            </v-card-title>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
        <v-flex xs6 sm6 md6 lg6>
          <v-card dark color="primary">
            <v-card-title primary-title>
              <h3 class="headline mb-0">flex card</h3>
            </v-card-title>
          </v-card>
        </v-flex>
        <v-flex xs6 sm6 md6 lg6>
          <v-card dark color="primary">
            <v-card-title primary-title>
              <h3 class="headline mb-0">flex card</h3>
            </v-card-title>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
  .col-borders {
    border: 1px solid black;
    text-align: center;
    margin-bottom: 5px;
  }
</style>