<template>
  <div class="search-widget__input">
    <div class="container">
      <InputSearch placeholder="Start searching in GitHub" @onSubmit='onSubmit'/>
    </div>
  </div>
</template>

<script>
import InputSearch from '@/components/InputSearch.vue';

export default {
  name: 'GithubSearchWidgetInput',
  components: {
    InputSearch,
  },
  methods: {
    onSubmit(data) {
      this.$store.dispatch('githubSearch/getRepositories', {
        search: data.inputValue,
        page: 1,
      });
    },
  },
};
</script>
