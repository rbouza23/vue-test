<template>
  <form class="input-search" @submit="onSubmit">
    <input type="search" class="input-search__input"
    :placeholder="placeholder" v-model='inputValue' required>
    <button type="submit" class="input-search__button">Search</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      inputValue: '',
    };
  },
  props: ['placeholder'],
  methods: {
    onSubmit(e) {
      e.preventDefault();

      this.$emit('onSubmit', {
        inputValue: this.inputValue,
      });
    },
  },
};
</script>

<style lang="scss">
  @import "~@/assets/scss/components/input-search.scss";
</style>
