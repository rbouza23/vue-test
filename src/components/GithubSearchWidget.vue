<template>
  <div class="search-widget">
    <GithubSearchWidgetInput/>
    <GithubSearchWidgetList/>
  </div>
</template>

<script>
import GithubSearchWidgetInput from '@/components/GithubSearchWidgetInput.vue';
import GithubSearchWidgetList from '@/components/GithubSearchWidgetList.vue';

export default {
  name: 'GithubSearchWidget',
  components: {
    GithubSearchWidgetInput,
    GithubSearchWidgetList,
  },
};
</script>

<style lang="scss">
  @import "~@/assets/scss/components/search-widget.scss";
</style>
