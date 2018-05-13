<template>
  <div class="page-container">
    <vk-notification :timeout="2000" :messages="notifications"
        @update:messages="setNotifications($event)"></vk-notification>
    <background></background>
    <div class="uk-container uk-margin-top" :class="{
      'is-searching': isSearching,
      'uk-container-expand': isSearching,
      'uk-container-small': !isSearching,
    }" v-show="!isSearching">
      <heading></heading>
    </div>
    <search-field class="search-field" :class="{
      'is-searching': isSearching,
      'uk-container uk-container-small': !isSearching,
    }"></search-field>
    <search-results class="uk-margin" v-show="isSearching"></search-results>
  </div>
</template>

<script>
  import {mapMutations, mapState} from 'vuex'

  import Background from '~/components/Background.vue';
  import Heading from '~/components/Heading.vue';
  import SearchField from '~/components/SearchField.vue';
  import SearchResults from '~/components/SearchResults.vue';

  import searchQuery from '~/middleware/searchQuery.js';

  export default {
    async fetch (context) {
      if (!context.route.query.q) {
        return context.redirect('/');
      }

      await searchQuery(context);
    },
    components: {
      Background,
      Heading,
      SearchField,
      SearchResults,
    },
    computed: {
      ...mapState(['isSearching', 'isMobile', 'notifications']),
    },
    methods: {
      ...mapMutations(['setNotifications']),
    },
  };
</script>

<style scoped>
  .page-container,
  .uk-container {
    position: relative;
    z-index: 1;
  }
</style>
