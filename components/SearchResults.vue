<template>
  <div class="uk-container uk-container-large">
    <vk-grid class="uk-flex uk-flex-wrap uk-flex-center">
      <div class="uk-width-auto" v-if="results" v-for="result in results"
          :key="result.id">
        <img :src="getImageUrl(result)" :alt="result.text">
      </div>
    </vk-grid>
  </div>
</template>

<script>
  import {mapState} from 'vuex';

  export default {
    computed: {
      ...mapState(['results'])
    },
    methods: {
      getImageUrl(result) {
        return `https://cdn.thefinergifs.club/${result.fileid}.gif`;
      },
    },
  };
</script>

<style>
  .uk-flex-wrap {
    position: relative;
  }
</style>
