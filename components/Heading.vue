<template>
  <div>
    <div class="uk-flex uk-flex-left uk-flex-nowrap">
      <h2>The Finer Gifs Club</h2>
      <vk-tabs class="tabs" align="right">
        <vk-tabs-item title="Home"></vk-tabs-item>
        <vk-tabs-item title="About"></vk-tabs-item>
      </vk-tabs>
    </div>
  </div>
</template>

<script>
  export default {
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

