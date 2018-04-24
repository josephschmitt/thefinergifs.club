<template>
  <div>
    <div class="uk-flex uk-flex-left uk-flex-nowrap">
      <h1>The Finer Gifs Club</h1>
      <vk-tabs class="tabs" align="right">
        <vk-tabs-item title="Home"></vk-tabs-item>
        <vk-tabs-item title="About"></vk-tabs-item>
      </vk-tabs>
    </div>
  </div>
</template>

<script>
  import {Tabs, TabsItem} from 'vuikit/lib/tabs';

  export default {
    components: {
      VkTabs: Tabs,
      VkTabsItem: TabsItem,
    }
  };
</script>

<style scoped>
  .tabs {
    margin-left: auto;
  }
</style>

