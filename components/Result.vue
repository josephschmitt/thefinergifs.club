<template>
  <div class="uk-width-auto" v-vk-tooltip="tooltip" :data-clipboard-text="imgurl">
    <img :src="imgurl" :alt="result.text">
  </div>
</template>

<script>
  import {mapMutations} from 'vuex';
  import ClipboardJS from 'clipboard';

  export default {
    props: ['result'],
    data() {
      return {
        cb: null,
        tooltip: {title: 'Click to copy URL', delay: 200},
      };
    },
    computed: {
      imgurl() {
        return `https://cdn.thefinergifs.club/${this.result.fileid}.gif`;
      },
    },
    methods: {
      onError() {
        this.removeResult(this.result);
      },
      ...mapMutations(['removeResult']),
    },
    mounted() {
      this.$el.querySelector('img').addEventListener('error', this.onError);
      this.cb = new ClipboardJS(this.$el);
    },
    beforeDestroy() {
      this.cb && this.cb.destroy();
    }
  };
</script>

<style scoped>
  img {
    cursor: pointer;
  }

  .uk-width-auto {
    position: relative;
  }
</style>
