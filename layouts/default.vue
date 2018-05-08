<template>
  <div class="uk-light uk-background-secondary uk-container app-container"
      :class="{
        'is-searching': isSearching,
        'uk-container-expand': isSearching,
        'uk-container-small': !isSearching,
      }">
    <background></background>
    <search-field class="search-field"></search-field>
    <nuxt class="page-container" :class="{
      'uk-margin-medium-top': !isMobile,
      'uk-margin-top': isMobile && !isSearching
    }" />
  </div>
</template>

<script>
  import {ResizeSensor} from 'css-element-queries';
  import {mapMutations, mapState} from 'vuex'

  import Background from '~/components/Background.vue';
  import SearchField from '~/components/SearchField.vue';

  export default {
    components: {
      Background,
      SearchField,
    },
    computed: {
      ...mapState(['isSearching', 'isMobile']),
    },
    methods: {
      onResizeSensor() {
        this.updateMobileState(this.$el.clientWidth < 650);
      },
      ...mapMutations(['updateMobileState']),
    },
    mounted() {
      this.rs = new ResizeSensor(this.$el, this.onResizeSensor);
      this.onResizeSensor();
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

  .page-container {
    position: relative;
    z-index: 1;
  }
</style>
