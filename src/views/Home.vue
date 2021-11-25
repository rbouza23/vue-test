<template>
  <div class="view view--home">
    <HeroBanner title="Search amazing things in GitHub API"/>
    <GithubSearchWidget/>
  </div>
</template>

<script>
import HeroBanner from '@/components/HeroBanner.vue';
import GithubSearchWidget from '@/components/GithubSearchWidget.vue';

export default {
  name: 'Home',
  components: {
    HeroBanner,
    GithubSearchWidget,
  },
};
</script>

<style lang="scss">
@import '~@/assets/scss/views/home.scss';
</style>
