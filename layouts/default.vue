<template>
  <div class="app-container" :class="{'is-searching': isSearching}">
    <background></background>
    <search-field class="search-field"></search-field>
    <nuxt class="uk-light uk-background-secondary page-container" />
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  import Background from '~/components/Background.vue';
  import SearchField from '~/components/SearchField.vue';

  export default {
    components: {
      Background,
      SearchField,
    },
    computed: {
      ...mapState(['isSearching']),
    },
  };
</script>

<style>
  html {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background: black;
  }

  *, *:before, *:after {
    box-sizing: border-box;
    margin: 0;
  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  .app-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .app-container .search-field {
    order: 1;
  }

  .app-container.is-searching .search-field {
    order: 0;
  }
</style>
