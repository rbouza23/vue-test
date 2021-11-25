<template>
  <Paginate
    v-model="page"
    :page-count="20"
    :page-range="5"
    :margin-pages="0"
    :click-handler="onClickPageBtn"
    :prev-text="'Prev'"
    :next-text="'Next'"
    :container-class="'pagination'"
    :page-class="'pagination__item'"
    :prev-class="'pagination__item pagination__item--prev'"
    :next-class="'pagination__item pagination__item--next'"
    :active-class="'pagination__item--active'">
  </Paginate>
</template>

<script>
import Paginate from 'vuejs-paginate';

export default {
  props: ['currentPage'],
  components: {
    Paginate,
  },
  data() {
    return {
      page: this.currentPage,
    };
  },
  methods: {
    onClickPageBtn(page) {
      const { search } = this.$store.getters['githubSearch/githubResultsMeta'];
      this.$store.dispatch('githubSearch/getRepositories', {
        page,
        search,
      });
    },
  },
};
</script>

<style lang="scss">
  @import "~@/assets/scss/components/pagination.scss";
</style>
