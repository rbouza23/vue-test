<template>
  <footer class="hero-banner">
    <div class="container">
      <h1 class="heading heading--size-1">{{title}}</h1>
    </div>
  </footer>
</template>

<script>
export default {
  props: ['title'],
};
</script>

<style lang="scss">
  @import "~@/assets/scss/components/hero-banner.scss";
</style>
