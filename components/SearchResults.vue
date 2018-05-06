<template>
  <div class="uk-container uk-container-large">
    <div class="results">
      <result v-if="results" v-show="!isLoading" v-for="result in results" :key="result.id"
          :result="result"></result>
    </div>
  </div>
</template>

<script>
  import {mapActions, mapState} from 'vuex';

  import Result from './Result.vue';

  export default {
    components: {
      Result,
    },
    computed: {
      ...mapState(['results', 'isLoading'])
    },
    methods: {
      getImageUrl(result) {
        return `https://cdn.thefinergifs.club/${result.fileid}.gif`;
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
