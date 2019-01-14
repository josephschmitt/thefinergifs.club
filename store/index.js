import axios from 'axios';
import URL from 'url-parse';
import Vuex from 'vuex';
import zeropad from 'zeropad';

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
    episodes: [],
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
  },
  setEpisodes(state, episodes) {
    state.episodes = episodes;
  }
};

export const actions = {
  async search({commit}, params) {
    const {query, season, episode, page} = params;

    const searchState = !!query || !!(season && episode);
    commit('updateSearchState', searchState);

    if (searchState) {
      commit('updateLoadingState', true);

      const {results, hits} = await search(params);

      commit('refreshResults', results);

      commit('updateCurrentPage', (hits.start / ITEMS_PER_PAGE) + 1);
      commit('updateResultsCount', hits.found);
      commit('updateLoadingState', false);
    } else {
      commit('refreshResults', null);
      commit('updateCurrentPage', 1);
      commit('updateResultsCount', 0);
    }
  },

  async loadEpisodes({commit, state}) {
    const {data} = (await axios.get('/episodes.json'));
    commit('setEpisodes', data.episodes);
  },
};

async function search({query, season, episode, page = 1, size = ITEMS_PER_PAGE}) {
  const q = buildQuery({query, season, episode});

  const url = new URL('search', process.env.API_BASE_URL).href;
  const {data} = await axios.get(url, {
    params: {
      q,
      start: (page - 1) * ITEMS_PER_PAGE,
      size,
      sort: query ? '_score asc' : 'fileid desc'
    },
  });

  return data;
}

function buildQuery({query, season, episode}) {
  const epQuery = season && episode ? `(and (prefix field='fileid' ` +
    `'${zeropad(season)}x${zeropad(episode)}'))` : '';

  if (query) {
    return `(and (phrase field='text' '${query}') ${epQuery})`;
  }

  return epQuery;
}
