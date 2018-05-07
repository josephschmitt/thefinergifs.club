import axios from 'axios';
import Vuex from 'vuex';

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
  async search({commit}, query) {
    commit('updateSearchState', !!query);
    commit('updateLoadingState', true);
    commit('refreshResults', await search(query));
    commit('updateLoadingState', false);
  }
};

async function search(query) {
  const {data} = await axios.get('https://api.thefinergifs.club/search', {
    params: {q: query},
  });

  return data.results;
}
