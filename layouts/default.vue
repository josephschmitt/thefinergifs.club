<template>
  <div class="uk-light uk-background-secondary app-container">
    <nuxt />
  </div>
</template>

<script>
  import {ResizeSensor} from 'css-element-queries';
  import {mapMutations, mapState} from 'vuex'

  export default {
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
</style>
