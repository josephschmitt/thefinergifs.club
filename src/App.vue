<template>
  <div id="app">
    <div class="uk-container uk-container-small uk-flex uk-flex-top uk-flex-column uk-flex-stretch uk-padding-small">
      <heading></heading>
      <search-field class="search-field"></search-field>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import Vuikit from 'vuikit';

  import Heading from './components/Heading.vue';
  import SearchField from './components/SearchField.vue';

  import '@vuikit/theme'

  Vue.use(Vuikit);

  export default {
    name: 'app',
    components: {
      Heading,
      SearchField,
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<style>
  * {
    box-sizing: border-box;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .uk-container {
    height: 100vh;
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

  .search-field {
    margin-top: 15%;
  }
</style>
