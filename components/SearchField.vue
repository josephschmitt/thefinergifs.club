<template>
  <div>
    <form class="uk-search uk-search-navbar"
        :class="searchFieldClass"
        @submit.prevent="performSearch()">
      <vk-icon class="uk-search-icon" icon="search" :ratio="iconRatio"></vk-icon>
      <input class="uk-search-input" type="search"
          :placeholder="placeholder" autofocus
          v-model="query" v-on:input="onQueryChange()">
      <vk-spinner :ratio="iconRatio" v-if="isLoading"></vk-spinner>
    </form>
    <hr class="uk-divider-icon" v-if="isSearching">
  </div>
</template>

<script>
  import {mapMutations, mapState} from 'vuex';
  import {IconSearch} from '@vuikit/icons';

  let timeout;
  const WAIT = 500;

  export default {
    components: {
      VkIconsSearch: IconSearch
    },
    data() {
      return {
        query: '',
        rs: null,
      };
    },
    methods: {
      onQueryChange() {
        clearTimeout(timeout);
        timeout = setTimeout(this.performSearch, WAIT);
      },
      performSearch() {
        this.updateSearchState(!!this.query);

        if (this.query) {
          this.$router.push({name: 'search', query: {q: this.query}});
        } else {
          this.$router.push({name: 'index'});
        }
      },
      ...mapMutations(['updateSearchState', 'updateLoadingState']),
    },
    computed: {
      iconRatio() {
        return this.isMobile ? 1 : 2;
      },
      placeholder() {
        return this.isMobile ? 'Search quote...' : 'Search for a quote from The Office...';
      },
      searchFieldClass() {
        return {
          'is-focused': !!this.query,
          'uk-search-large': !this.isMobile,
        };
      },
      ...mapState(['isMobile', 'isSearching', 'isLoading']),
    },
    created() {
      this.query = (this.$route.query || {}).q || '';
      this.updateLoadingState(false);
    },
    mounted() {
      this.$el.querySelector('input[type="search"]').focus();
    }
  }
</script>

<style scoped>
  .uk-search-navbar {
    display: flex;
  }

  .uk-search,
  .uk-search-input {
    width: 100%;
  }

  .uk-container-small .uk-search {
    margin-left: -20px;
  }

  .uk-container-small .uk-search-large {
    margin-left: -40px;
  }

  .uk-search-large .uk-search-input {
    font-size: 34px;
  }
</style>

