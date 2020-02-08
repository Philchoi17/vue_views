import Vue from 'vue'
import Vuex from 'vuex'
import { starWarsCharacters } from '@/vars'
import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    getCharacter(context, val) {
      Axios.get(starWarsCharacters + val)
        .then(character => {
          console.log('starwarsCharacter', character.data)
        }).catch(err => console.log(err))
    }
  },
  modules: {
  }
})
