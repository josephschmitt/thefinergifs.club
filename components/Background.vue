<template>
  <div class="background" :class="{'is-searching': isSearching}">
    <video width="100%" height="100%" autoplay muted loop playsinline>
      <source src="~/assets/finer-things-club-web.mp4" type="video/mp4">
    </video>
  </div>
</template>

<script>
  import {mapState} from 'vuex';

  export default {
    computed: {
      ...mapState(['isSearching']),
    },
  }
</script>

<style scoped>
  video {
    object-fit: cover;
    width: 100%;
    height: 100%;
    transition: opacity 150ms ease;
  }

  .is-searching video {
    opacity: 0;
  }

  .background {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 0;
    min-width: 100%;
    min-height: 100%;
    background-image: url('~/assets/Balg6Fx-damask-desktop-wallpaper.jpg');
    background-repeat:  no-repeat;
    background-position: top center;
    background-size: cover;
  }

  .background:after {
    content: '';
    position: absolute;
    top: -100%;
    right: -100%;
    bottom: -100%;
    left: -100%;
    z-index: 0;
    background: rgba(0, 0, 0, 0.5);
  }

  .is-searching .background:after {
    background: rgba(0, 0, 0, 0.3);
  }
</style>
