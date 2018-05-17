<template>
  <div class="add-to-slack">
    <img src="~/assets/Slack_Mark_Monochrome_White.svg" />
    <a class="uk-button uk-button-text uk-button-small uk-text-bold"
        href="https://slack.com/oauth/authorize?client_id=2171669066.363245088081&scope=commands">
      <span>Add to Slack</span>
    </a>
  </div>
</template>

<style scoped>
  a {
    position: relative;
    display: inline-block;
    height: 35px;
    vertical-align: baseline;
  }

  img {
    display: inline-block;
    height: 40px;
  }

  span {
    position: relative;
    top: 3px;
  }

  .add-to-slack {
    margin-left: -10px;
  }
</style>
