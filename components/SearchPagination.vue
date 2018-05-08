<template>
  <vk-pagination class="uk-margin-large-top" align="center" :page="currentPage || 1"
      @update:page="updatePage($event)" :perPage="perPage" :total="resultsCount"
      v-show="resultsCount > perPage">
    <vk-pagination-page-prev label="Previous"></vk-pagination-page-prev>
    <vk-pagination-pages></vk-pagination-pages>
    <vk-pagination-page-next label="Next"></vk-pagination-page-next>
  </vk-pagination>
</template>

<script>
  import {mapState} from 'vuex';
  import {ITEMS_PER_PAGE} from '~/store/index.js';

  export default {
    data() {
      return {
        perPage: ITEMS_PER_PAGE,
      };
    },
    methods: {
      updatePage(page) {
        const query = Object.assign({}, this.$route.query, {page});
        if (page === 1) {
          delete query.page;
        }

        this.$router.push({name: this.$route.name, query});
      }
    },
    computed: {
      ...mapState(['currentPage', 'resultsCount']),
    },
  };
</script>

