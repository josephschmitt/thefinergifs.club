<template>
  <div>
    <search-results class="uk-margin-xlarge"></search-results>
  </div>
</template>

<script>
  import SearchResults from '~/components/SearchResults.vue';

  export default {
    components: {
      SearchResults,
    },
    fetch ({route, redirect}) {
      if (!route.query.q) {
        redirect('/');
      }
    }
  };
</script>

<style scoped>

</style>
