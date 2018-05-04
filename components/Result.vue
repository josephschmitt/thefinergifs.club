<template>
  <div class="uk-width-auto">
    <img :src="getImageUrl(result)" :alt="result.text">
  </div>
</template>

<script>
  import {mapMutations} from 'vuex';

  export default {
    props: ['result'],
    methods: {
      getImageUrl(result) {
        return `https://cdn.thefinergifs.club/${result.fileid}.gif`;
      },
      onError() {
        this.removeResult(this.result);
      },
      ...mapMutations(['removeResult']),
    },
    mounted() {
      this.$el.querySelector('img').addEventListener('error', this.onError);
    }
  };
</script>

<style scoped>

</style>
