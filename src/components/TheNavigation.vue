<template>
  <nav id="nav" class="navigation">
    <ul class="navigation__list">
      <li class="navigation__item">
        <router-link to="/" class="navigation__link">Home</router-link>
      </li>
      <li class="navigation__item">
        <router-link to="/contact" class="navigation__link">Contact</router-link>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss">
@import "~@/assets/scss/components/navigation.scss";
</style>
