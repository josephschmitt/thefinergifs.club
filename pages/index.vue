<template>
  <div :class="{'is-searching': isSearching}">
    <background-video></background-video>
    <div class="uk-container uk-container-small uk-flex uk-flex-column uk-flex-stretch">
      <heading></heading>
      <search-field class="search-field"></search-field>
    </div>
    <search-results class="uk-margin-xlarge"></search-results>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

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
    computed: {
      ...mapState(['isSearching']),
    }
  };
</script>

<style scoped>
  .uk-container {
    position: relative;
    z-index: 1;
  }
</style>
