<template>
  <div :class="{'sticky': isSearching}">
    <div class="search-field-bg" :class="{'is-searching': isSearching}"></div>
    <form class="uk-search uk-search-navbar"
        :class="{
          'is-focused': !!query,
          'uk-search-large': !isMobile,
          'uk-button-text': !isSearching,
        }" @submit.prevent="performSearch()">
      <vk-icon class="uk-search-icon" icon="search" :ratio="iconRatio"></vk-icon>
      <vk-drop class="uk-width-large uk-padding-small advanced-options" mode="click"
          position="bottom-left">
        <form class="uk-form-stacked">
          <fieldset class="uk-fieldset uk-text-left">
            <legend class="uk-legend">Advanced Options</legend>
            <vk-grid class="uk-drop-grid" gutter="small">
              <div class="uk-width-1-2">
                <label class="uk-form-label uk-padding-small">Season</label>
                <div class="uk-form-controls">
                  <select class="uk-select" v-model="querySeason" v-on:input="onQueryChange()">
                    <option :value="null">--Choose Season--</option>
                    <option v-for="(episode, index) in episodes" v-bind:key="index"
                        v-bind:value="index + 1">
                      Season {{index + 1}}
                    </option>
                  </select>
                </div>
              </div>
              <div class="uk-width-1-2">
                <label class="uk-form-label uk-padding-small">Episode</label>
                <div class="uk-form-controls">
                  <select class="uk-select" v-model="queryEpisode" :disabled="!querySeason"
                      v-on:input="onQueryChange()">
                    <option :value="null">--Choose Episode--</option>
                    <option v-if="querySeason" v-for="episode in episodesInSeason"
                        v-bind:key="episode.number" v-bind:value="episode.number">
                      {{episode.number}}: {{episode.title}}
                    </option>
                  </select>
                </div>
              </div>
            </vk-grid>
          </fieldset>
        </form>
      </vk-drop>
      <input class="uk-search-input" type="search"
          :placeholder="placeholder" autofocus
          v-model="query" v-on:input="onQueryChange()">
      <vk-spinner :ratio="iconRatio" v-if="isLoading"></vk-spinner>
    </form>
    <hr class="uk-divider-icon" v-if="isSearching">
  </div>
</template>

<script>
  import {mapMutations, mapState, mapActions} from 'vuex';
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
        querySeason: null,
        queryEpisode: null
      };
    },
    methods: {
      onQueryChange() {
        clearTimeout(timeout);
        timeout = setTimeout(this.performSearch, WAIT);
      },
      performSearch() {
        const isSearching = !!this.query || !!(this.querySeason && this.queryEpisode);
        this.updateSearchState(isSearching);

        console.log('isSearching', isSearching)
        console.log('queryEpisode', this.queryEpisode)
        if (isSearching) {
          this.$router.push({query: {
            q: this.query,
            season: this.querySeason,
            episode: this.queryEpisode
          }});
        } else {
          this.$router.push({query: null});
        }
      },
      ...mapActions(['search', 'loadEpisodes']),
      ...mapMutations(['updateSearchState', 'updateLoadingState']),
    },
    computed: {
      iconRatio() {
        return this.isMobile ? 1 : 2;
      },
      placeholder() {
        return this.isMobile ? 'Search quote...' : 'Search for a quote from The Office...';
      },
      episodesInSeason() {
        return this.querySeason && this.querySeason >= 0 ? this.episodes[this.querySeason - 1] : [];
      },
      ...mapState([
        'isMobile',
        'isSearching',
        'isLoading',
        'episodes'
      ])
    },
    created() {
      const routeQuery = this.$route.query || {};

      this.query = routeQuery.q || '';
      this.querySeason = routeQuery.season;
      this.queryEpisode = routeQuery.episode;
    },
    mounted() {
      this.$el.querySelector('input[type="search"]').focus();
      this.loadEpisodes();
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

  .uk-search .uk-search-icon {
    width: 20px;
    pointer-events: auto !important; /* The search icon shows the advanced search options */
  }

  .uk-search .uk-search-input {
    padding-left: 30px !important;
  }

  .uk-search-large .uk-search-icon {
    width: 40px;
  }

  .uk-search-large .uk-search-input {
    font-size: 34px;
    padding-left: 60px !important;
  }

  .search-field {
    position: relative;
    padding-top: 10px;
  }

  .search-field-bg {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0;
    background-image: url('~/assets/Balg6Fx-damask-desktop-wallpaper.jpg');
    background-repeat:  no-repeat;
    background-position: top center;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.5);
  }

  .search-field-bg.is-searching {
    transition: opacity 150ms ease 100ms;
    opacity: 1;
  }

  .sticky {
    position: sticky;
    top: 0;
    z-index: 2;
  }

  hr {
    margin: 5px 0 10px;
  }

  .advanced-options {
    background: black;
  }
</style>

