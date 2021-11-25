<template>
  <header class="header">
    <div class="container">
      <div class="row">
        <div class="col">
          <a href="#">
            <img src="@/assets/img/ui/logo.svg" alt="AC" class="header__logo">
          </a>
        </div>
        <div class="col col--nav">
          <TheNavigation/>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import TheNavigation from '@/components/TheNavigation.vue';

export default {
  name: 'Header',
  components: {
    TheNavigation,
  },
};
</script>

<style lang="scss">
@import "~@/assets/scss/components/header.scss";
</style>
