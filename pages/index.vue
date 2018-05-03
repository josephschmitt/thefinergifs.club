<template>
  <div class="uk-light uk-background-secondary">
    <background-video></background-video>
    <div class="uk-container uk-container-small uk-flex uk-flex-column uk-flex-stretch">
      <heading></heading>
      <search-field class="search-field"></search-field>
    </div>
    <search-results class="uk-margin-xlarge"></search-results>
  </div>
</template>

<script>
  import BackgroundVideo from '~/components/BackgroundVideo.vue';
  import Heading from '~/components/Heading.vue';
  import SearchField from '~/components/SearchField.vue';
  import SearchResults from '~/components/SearchResults.vue';

  export default {
    components: {
      BackgroundVideo,
      Heading,
      SearchField,
      SearchResults,
    },
  };
</script>

<style scoped>
  .uk-container {
    position: relative;
    z-index: 1;
  }

  .search-field {
    margin-top: 15%;
  }
</style>
