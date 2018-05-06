<template>
  <div class="uk-container uk-container-large">
    <vk-notification timeout="2000" :messages.sync="messages"></vk-notification>
    <div class="results">
      <result v-if="results" v-show="!isLoading && isSearching" v-for="result in results"
          :key="result.id" :result="result" @copied="onCopied()">
      </result>
    </div>
  </div>
</template>

<script>
  import {mapActions, mapState} from 'vuex';

  import Result from './Result.vue';

  export default {
    data() {
      return {
        messages: [],
      };
    },
    components: {
      Result,
    },
    computed: {
      ...mapState(['results', 'isLoading', 'isSearching'])
    },
    methods: {
      getImageUrl(result) {
        return `https://cdn.thefinergifs.club/${result.fileid}.gif`;
      },
      onCopied() {
        this.messages.push('Copied URL to clipboard');
      },
      ...mapActions(['search']),
    },
    created() {
      this.search((this.$route.query || {}).q || '');
    }
  };
</script>

<style>
  .uk-flex-wrap {
    position: relative;
  }

  .results {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 400px));
    grid-gap: 20px;
    justify-content: center;
  }
</style>
