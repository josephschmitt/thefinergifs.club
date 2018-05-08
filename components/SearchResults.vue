<template>
  <div class="uk-container uk-container-large">
    <vk-notification :timeout="2000" :messages.sync="messages"></vk-notification>
    <p class="uk-margin-remove-top uk-text-meta" v-if="isMobile && results && results.length">
      Tap on a clip to copy the link to your clipboard.
    </p>
    <div class="results" :class="{'no-results': noResults}">
      <result v-if="results" v-show="!isLoading && isSearching" v-for="result in results"
          :key="result.id" :result="result" @copied="onCopied()">
      </result>
      <h2 v-if="noResults">No Results</h2>
    </div>
    <search-pagination></search-pagination>
  </div>
</template>

<script>
  import {mapState} from 'vuex';

  import Result from './Result.vue';
  import SearchPagination from './SearchPagination.vue';

  export default {
    data() {
      return {
        messages: [],
      };
    },
    components: {
      Result,
      SearchPagination,
    },
    computed: {
      noResults() {
        return (!this.results || !this.results.length) && !this.isLoading && this.isSearching;
      },
      ...mapState(['results', 'isLoading', 'isSearching', 'isMobile'])
    },
    methods: {
      getImageUrl(result) {
        return `https://cdn.thefinergifs.club/${result.fileid}.gif`;
      },
      onCopied() {
        this.messages.push('Copied URL to clipboard');
      },
    },
  };
</script>

<style>
  .results {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(290px, 400px));
    grid-template-rows: repeat(auto-fill, minmax(160px, 225px));
    grid-gap: 20px;
    justify-content: center;
    position: relative;
  }

  .no-results {
    grid-template-columns: 1fr;
  }
</style>
