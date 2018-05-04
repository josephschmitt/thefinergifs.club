<template>
  <div class="uk-container uk-container-large">
    <vk-grid class="uk-flex uk-flex-wrap uk-flex-center">
      <result v-if="results" v-for="result in results" :key="result.id"
          :result="result"></result>
    </vk-grid>
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
      ...mapState(['results'])
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
</style>
