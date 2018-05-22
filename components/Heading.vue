<template>
  <div :class="{'uk-margin-large-bottom': !isMobile}">
    <div class="uk-flex uk-flex-left uk-flex-top uk-flex-nowrap uk-margin-large-bottom" :class="{
      'uk-flex-column': isMobile
    }">
      <h2 :class="{'uk-text-large': isMobile}">The Finer Gifs Club</h2>
      <add-to-slack></add-to-slack>
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

  import AddToSlack from '~/components/AddToSlack.vue';

  export default {
    components: {
      AddToSlack,
    },
    computed: {
      ...mapState(['isMobile']),
    }
  };
</script>

<style scoped>
  h2 {
    margin: 0 auto 0 0;
    filter: drop-shadow(3px 3px 0 rgba(0, 0, 0, 0.25));
  }
</style>

