import axios from 'axios';
import Vuex from 'vuex';

export const ITEMS_PER_PAGE = 10;

export const state = () => {
  return {
    page: 'index',
    isSearching: false,
    isLoading: false,
    isMobile: false,
    results: [],
    resultsCount: 0,
    currentPage: 0,
    notifications: [],
  };
};

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
  updateCurrentPage(state, index) {
    state.currentPage = index;
  },
  updateResultsCount(state, count) {
    state.resultsCount = count;
  },
  showNotification(state, message) {
    state.notifications.push(message);
  },
  setNotifications(state, notifications) {
    state.notifications = notifications;
  },
  refreshResults(state, results) {
    state.results = Array.isArray(results) ? results.map(({fields}) => fields) : [];
  },
  removeResult(state, result) {
    const index = state.results.indexOf(result);
    state.results.splice(index, 1);
  }
};

export const actions = {
  async search({commit}, params) {
    const {query, page} = params;

    commit('updateSearchState', !!query);

    if (query) {
      commit('updateLoadingState', true);

      const {results, hits} = await search(params);

      commit('refreshResults', results);

      commit('updateCurrentPage', hits.start);
      commit('updateResultsCount', hits.found);
      commit('updateLoadingState', false);
    } else {
      commit('refreshResults', null);
      commit('updateCurrentPage', 0);
      commit('updateResultsCount', 0);
    }
  }
};

async function search({query, page = 1, size = ITEMS_PER_PAGE}) {
  const {data} = await axios.get(process.env.API_BASE_URL + '/search', {
    params: {
      q: query, start: (page - 1) * ITEMS_PER_PAGE, size},
  });

  return data;
}
