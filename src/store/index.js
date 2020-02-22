import Vue from 'vue'
import Vuex from 'vuex'
import { starWarsCharacters, corsAnywhere } from '@/vars'
import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: 'Star Wars',
    characters: ['test']
  },
  mutations: {
    ADD_CHARACTER(state, payload) {
      // Vue.set(state, 'characters', )
      state.characters.push(payload.name)
    }
  },
  actions: {
    getCharacter(context, val) {
      if(val) {
        for(let i = 1; i <= 88; i++) {
          Axios.get(corsAnywhere + starWarsCharacters + String(i))
            .then(character => {
              console.log('starwarsCharacter', character.data)
              context.commit('ADD_CHARACTER', character.data)
            }).catch(err => console.log(err))
        }
      }
    }
  },
  modules: {
  }
})
