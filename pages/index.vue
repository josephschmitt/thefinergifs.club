<template>
  <div>
    <div class="uk-container uk-container-small uk-flex uk-flex-column uk-flex-stretch">
      <heading></heading>
    </div>
  </div>
</template>

<script>
  import Heading from '~/components/Heading.vue';

  export default {
    components: {
      Heading,
    },
  };
</script>

<style scoped>
  .uk-container {
    position: relative;
    z-index: 1;
  }
</style>
