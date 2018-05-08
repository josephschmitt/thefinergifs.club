<template>
  <vk-pagination class="uk-margin-large-top" :page.sync="page" :perPage="perPage" :total="resultsCount"
      v-show="resultsCount > perPage">
    <vk-pagination-page-prev label="Previous" expanded></vk-pagination-page-prev>
    <vk-pagination-pages></vk-pagination-pages>
    <vk-pagination-page-next label="Next" expanded></vk-pagination-page-next>
  </vk-pagination>
</template>

<script>
  import {mapState} from 'vuex';
  import {ITEMS_PER_PAGE} from '~/store/index.js';

  export default {
    data() {
      return {
        page: this.currentPage || 1,
        perPage: ITEMS_PER_PAGE,
      };
    },
    computed: {
      ...mapState(['currentPage', 'resultsCount']),
    },
    watch: {
      page() {
        const query = Object.assign({}, this.$route.query, {page: this.page});
        this.$router.push({name: this.$route.name, query});
      }
    }
  };
</script>

