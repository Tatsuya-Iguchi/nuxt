<template>
  <div class="l-container">
    <div class="l-item l-header">
      <h1 class="m-font-big">hogehoge</h1>
    </div>
    <div class="item">
      <logo />
    </div>
    <div class="l-item">
      <h1 class="m-font-big t-title-blue">
        nuxt-p
      </h1>
    </div>
    <div class="l-item">
      <h2 class="m-font-big t-title-blue">
        nuxt
      </h2>
    </div>
    <div class="l-item">
      <a href="https://nuxtjs.org" target="_blank" class="button--green">
        Documentation
      </a>
    </div>
    <div class="l-item">
      <a
        href="https://github.com/nuxt/nuxt.js"
        target="_blank"
        class="button--grey"
      >
        GitHub
      </a>
    </div>
    <div class="l-item l-footer">
      <h1 class="m-font-big">fugafuga</h1>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style>
/* Base prefix: b- */
/* Layout prefix: l- */
.l-container {
  margin: 0 auto;
  min-height: 100vh;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(5, 1fr);
  justify-content: center;
  align-items: center;
  text-align: center;
}

.l-item {
  padding-top: 15px;
  padding-right: 15px;
  padding-bottom: 15px;
  padding-left: 15px;
}

.l-header {
  grid-column-start: 1;
  grid-column-end: 6;
  grid-row-start: 1;
  grid-row-end: 2;
}

.l-footer {
  grid-column-start: 1;
  grid-column-end: 6;
  grid-row-start: 3;
  grid-row-end: 4;
}

/* Module prefix: m- */
.m-font-big {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: grid;
  font-weight: 300;
  font-size: 100px;
  letter-spacing: 1px;
}

/* State prefix: s- */
/* Theme prefix: t- */
.t-title-blue {
  color: #526488;
}
</style>
