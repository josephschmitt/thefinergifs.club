<template>
  <div class="uk-width-auto" :data-clipboard-text="imgurl">
    <div class="label-center"><span class="uk-label">Click to copy URL</span></div>
    <div class="uk-tile uk-tile-secondary"></div>
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
      };
    },
    computed: {
      imgurl() {
        return `${process.env.CDN_BASE_URL}/${this.result.fileid}.gif`;
      },
    },
    methods: {
      onError() {
        this.removeResult(this.result);
      },
      ...mapMutations(['removeResult', 'showNotification']),
    },
    mounted() {
      this.$el.querySelector('img').addEventListener('error', this.onError);
      this.cb = new ClipboardJS(this.$el);
      this.cb.on('success', () => this.showNotification('Copied URL to clipboard'));
    },
    beforeDestroy() {
      this.cb && this.cb.destroy();
    }
  };
</script>

<style scoped>
  img {
    position: relative;
    cursor: pointer;
  }

  .uk-width-auto {
    position: relative;
  }

  .label-center {
    display: flex;
    justify-content: center;
    position: absolute;
    top: 10px;
    left: 0;
    right: 0;
  }

  .uk-label {
    display: none;
    opacity: 0.85;
  }

  .uk-tile {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0.85;
  }

  @media (hover: hover) {
    .uk-width-auto:hover .uk-label {
      display: inline-block;
    }
  }
</style>
