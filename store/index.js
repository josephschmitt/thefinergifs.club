import axios from 'axios';
import Vuex from 'vuex';

let timeout;
const WAIT = 250;

export default function createStore() {
  return new Vuex.Store({
    state: {
      results: [],
    },
    mutations: {
      refresh(state, results) {
        state.results = results.map(({fields}) => fields);
      }
    },
    actions: {
      search({commit}, query) {
        clearTimeout(timeout);
        timeout = setTimeout(async () => commit('refresh', await search(query)), WAIT);
      }
    },
  })
}

async function search(query) {
  const {data} = await axios.get('https://api.thefinergifs.club/search', {
    params: {q: query},
  });

  return data.hits.hit;
}
