<template>
  <div>
    <div class="subheader" >
      <div class="container">{{githubResultsMeta.totalCount}} topics found</div>
    </div>

    <div class="loader-wrapper" v-if='isLoading'>
      <div class="container">
        <Loader/>
      </div>
    </div>
    <div v-else>
      <div class="search-widget__list">
        <div v-if="githubResults.length > 0" class="container">
          <GithubSearchWidgetListItem v-for='githubResult in githubResults' :key='githubResult.id' :githubResult='githubResult'/>
          <div class="pagination-wrapper">
            <Pagination :currentPage='githubResultsMeta.currentPage' />
          </div>
        </div>
        <div v-else class="container">
          <GithubSearchWidgetListNoResults/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Pagination from '@/components/Pagination.vue';
import GithubSearchWidgetListNoResults from '@/components/GithubSearchWidgetListNoResults.vue';
import GithubSearchWidgetListItem from '@/components/GithubSearchWidgetListItem.vue';
import Loader from '@/components/Loader.vue';

export default {
  components: {
    GithubSearchWidgetListItem,
    GithubSearchWidgetListNoResults,
    Loader,
    Pagination,
  },
  computed: {
    isLoading() {
      return this.$store.getters['githubSearch/isLoading'];
    },
    githubResults() {
      return this.$store.getters['githubSearch/githubResults'];
    },
    githubResultsMeta() {
      return this.$store.getters['githubSearch/githubResultsMeta'];
    },
  },
};
</script>
