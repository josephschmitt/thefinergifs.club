<template>
  <div class="uk-width-auto" :data-clipboard-text="imgurl">
    <div class="label-center"><span class="uk-label">Click to copy URL</span></div>
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
      this.cb.on('success', () => this.$emit('copied'));
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

  @media (hover: hover) {
    .uk-width-auto:hover .uk-label {
      display: inline-block;
    }
  }
</style>
