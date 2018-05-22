<template>
  <div :class="{'uk-margin-large-bottom': !isMobile}">
    <div class="uk-flex uk-flex-left uk-flex-top uk-margin-large-bottom" :class="{
      'uk-flex-wrap': isMobile
    }">
      <h2 :class="{'uk-text-large': isMobile}">The Finer Gifs Club</h2>
      <add-to-slack class="tab-btn"></add-to-slack>
      <div class="tab-btn">
        <a class="uk-button uk-button-text uk-button-small uk-text-bold"
            href="https://joe.sh/in-search-of-finer-gifs">What is this?</a>
      </div>
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

  .uk-flex.uk-flex-wrap {
    justify-content: flex-start;
  }
</style>

<style>
  .tab-btn {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    margin-left: 30px;
    position: relative;
    top: 5px;
  }

  .tab-btn a {
    padding: 10px 0;
  }

  .uk-flex-wrap .tab-btn {
    margin-left: 0;
  }

  .uk-flex-wrap .tab-btn:last-child {
    margin-left: auto;
  }
</style>
