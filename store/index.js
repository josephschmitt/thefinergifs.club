import axios from 'axios';
import Vuex from 'vuex';

let timeout;
const WAIT = 250;

export const state = () => ({
  page: 'index',
  isSearching: false,
  isLoading: false,
  isMobile: false,
  results: [],
});

export const mutations = {
  updatePage(state, page) {
    state.page = page;
  },
  updateSearchState(state, isSearching) {
    state.isSearching = isSearching;
  },
  updateLoadingState(state, isLoading) {
    state.isLoading = isLoading;
  },
  updateMobileState(state, isMobile) {
    state.isMobile = isMobile;
  },
  refreshResults(state, results) {
    state.results = results.map(({fields}) => fields);
  },
  removeResult(state, result) {
    const index = state.results.indexOf(result);
    state.results.splice(index, 1);
  }
};

export const actions = {
  search({commit}, query) {
    commit('updateSearchState', !!query);

    clearTimeout(timeout);
    timeout = setTimeout(async () => {
      commit('updateLoadingState', true);
      commit('refreshResults', await search(query));
      commit('updateLoadingState', false);
    }, WAIT);
  }
};

async function search(query) {
  const {data} = await axios.get('https://api.thefinergifs.club/search', {
    params: {q: query},
  });

  return data.hits.hit;
}
