<template>
  <div>
    <search-results class="uk-margin-xlarge"></search-results>
  </div>
</template>

<script>
  import SearchResults from '~/components/SearchResults.vue';
  import searchQuery from '~/middleware/searchQuery.js';

  export default {
    components: {
      SearchResults,
    },
    async fetch (context) {
      if (!context.route.query.q) {
        return context.redirect('/');
      }

      await searchQuery(context);
    }
  };
</script>

<style scoped>

</style>
