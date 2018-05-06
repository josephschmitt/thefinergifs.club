<template>
  <div :class="{'uk-margin-large-bottom': !isMobile}">
    <div class="uk-flex uk-flex-left uk-flex-nowrap">
      <h2 :class="{'uk-text-large': isMobile}">
        The Finer Gifs Club <span class="uk-label">Beta</span>
      </h2>
      <vk-tabs class="uk-hidden uk-visible@m tabs" align="right">
        <vk-tabs-item title="Home"></vk-tabs-item>
        <vk-tabs-item title="About" href="http://www.calvin.edu/~cjn8/dunder_mifflin/">
        </vk-tabs-item>
      </vk-tabs>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex';

  export default {
    computed: {
      ...mapState(['isMobile']),
    }
  };
</script>

<style scoped>
  .tabs {
    margin-left: auto;
  }

  h2 {
    filter: drop-shadow(3px 3px 0 rgba(0, 0, 0, 0.25));
  }
</style>

