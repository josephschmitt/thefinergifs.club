<template>
  <div class="uk-flex uk-flex-center">
    <form class="uk-search uk-search-large">
      <span uk-search-icon="" class="uk-search-icon uk-icon">
        <vk-icon icon="search" ratio="2"></vk-icon>
      </span>
      <input class="uk-search-input" type="search" placeholder="Search...">
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
      };
    }
  }
</script>

<style scoped>
  .icon {
    display: inline-block;
  }
</style>

