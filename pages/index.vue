<template>
  <div class="uk-light uk-background-secondary">
    <background-video></background-video>
    <div class="uk-container uk-container-small uk-flex uk-flex-column uk-flex-stretch uk-padding-large">
      <heading></heading>
      <search-field class="search-field"></search-field>
    </div>
  </div>
</template>

<script>
  import BackgroundVideo from '~/components/BackgroundVideo.vue';
  import Heading from '~/components/Heading.vue';
  import SearchField from '~/components/SearchField.vue';

  export default {
    components: {
      BackgroundVideo,
      Heading,
      SearchField,
    },
  };
</script>

<style>
  .search-field {
    margin-top: 15%;
  }

  .uk-container {
    position: relative;
    z-index: 1;
  }
</style>
