<template>
  <div class="app-container">
    <nuxt class="uk-light uk-background-secondary" />
  </div>
</template>

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
    height: 100vh;
  }
</style>
