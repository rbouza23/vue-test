<template>
  <a :href='githubResult.html_url' class="search-widget__list-item" target="_blank">
    <div class="search-widget__item-name">{{githubResult.name}}</div>
    <div class="search-widget__item-description">{{githubResult.description}}</div>
    <div class="search-widget__item-author">
      <img :src="githubResult.owner.avatar_url" :alt="githubResult.owner.login" class="search-widget__item-avatar">
      {{githubResult.owner.login}}
    </div>
  </a>
</template>

<script>
export default {
  props: ['githubResult'],
};
</script>
