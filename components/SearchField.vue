<template>
  <div class="uk-flex uk-flex-stretch uk-flex-column">
    <form class="uk-search uk-search-large uk-search-default"
        v-bind:class="{'is-focused': !!query}">
      <span uk-search-icon="" class="uk-search-icon uk-icon">
        <vk-icon icon="search" ratio="2"></vk-icon>
      </span>
      <input class="uk-search-input" type="search" placeholder="Search..."
          autofocus v-model="query">
    </form>
  </div>
</template>

<script>
  import {IconSearch} from '@vuikit/icons';

  export default {
    components: {
      VkIconsSearch: IconSearch
    },
    data() {
      return {
        query: '',
      };
    },
    mounted() {
      this.$el.querySelector('input[type="search"]').focus();
    }
  }
</script>

<style scoped>
  .icon {
    display: inline-block;
  }

  .uk-search-large {
    width: auto;
  }

  .uk-search-large, .uk-search-input {
    transition: all 250ms ease;
  }

  .uk-search-large.is-focused {
    -webkit-backdrop-filter: blur(5px);
    background: rgba(0, 0, 0, 0.25) !important;
  }

  .uk-search-large:not(.is-focused) .uk-search-input {
    border-color: transparent;
  }
</style>

