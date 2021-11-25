<template>
  <div id="app" class="app">
    <TheHeader/>
    <router-view/>
    <TheFooter/>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';

export default {
  name: 'App',
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>

<style lang="scss">
  @import '~@/assets/scss/index.scss';
</style>
