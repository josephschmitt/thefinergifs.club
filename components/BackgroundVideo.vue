<template>
  <div class="background-video">
    <video width="100%" height="100%" autoplay muted loop>
      <source src="~/assets/finer-things-club-web.mp4" type="video/mp4">
    </video>
  </div>
</template>

<style scoped>
  video {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  .background-video {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 0;
    min-width: 100%;
    min-height: 100%;
  }

  .background-video:after {
    content: '';
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 0;
    background: rgba(0, 0, 0, 0.5);
  }
</style>
