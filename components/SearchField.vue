<template>
  <div>
    <div class="uk-flex uk-flex-stretch uk-flex-column"
        :class="{'uk-container uk-container-small': !isSearching}">
      <form class="uk-search"
          v-bind:class="searchFieldClass"
          v-on:submit.prevent="onSubmit">
        <span class="uk-search-icon uk-icon" :class="{'is-mobile': isMobile}">
          <vk-icon icon="search" :ratio="isMobile ? 1 : 2"></vk-icon>
        </span>
        <input class="uk-search-input" type="search" placeholder="Search for a quote from The Office..."
            autofocus v-model="query" v-on:input="onQueryChange()">
      </form>
    </div>
  </div>
</template>

<script>
  import {ResizeSensor} from 'css-element-queries';
  import {mapMutations, mapState} from 'vuex';
  import {IconSearch} from '@vuikit/icons';

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
        if (this.query) {
          this.$router.push({name: 'search', query: {q: this.query}});
        } else {
          this.$router.push({name: 'index'});
        }
      },
      onResizeSensor() {
        // this.isMobile = this.$el.clientWidth < 650;
        this.updateMobileState(this.$el.clientWidth < 650);
      },
      ...mapMutations(['updateMobileState']),
    },
    computed: {
      searchFieldClass() {
        return {
          'is-focused': !!this.query,
          'uk-search-large uk-search-default': !this.isMobile,
          'uk-search uk-search-navbar': this.isMobile,
        };
      },
      ...mapState(['isMobile', 'isSearching']),
    },
    created() {
      this.query = (this.$route.query || {}).q || '';
    },
    mounted() {
      this.$el.querySelector('input[type="search"]').focus();
      this.rs = new ResizeSensor(this.$el, this.onResizeSensor);
      this.onResizeSensor();
    }
  }
</script>

<style scoped>
  .icon {
    display: inline-block;
  }

  .uk-search {
    width: 100%;
  }

  .uk-search-large, .uk-search-input {
    transition: all 250ms ease;
  }

  .uk-search-large .uk-search-input {
    font-size: 34px;
  }

  .uk-search-icon.is-mobile {
    width: auto;
  }

  .uk-search-icon.is-mobile + .uk-search-input {
    padding-left: 30px;
    font-size: 18px;
  }

  .uk-search-large.is-focused {
    -webkit-backdrop-filter: blur(5px);
    background: rgba(0, 0, 0, 0.25) !important;
  }

  .uk-search-large:not(.is-focused) .uk-search-input {
    border-color: transparent;
  }
</style>

