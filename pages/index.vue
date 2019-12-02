<template>
  <div class="l-container">
    <div class="item">
      <logo />
    </div>
    <div class="l-item">
      <h1 class="m-fontsize-fixed t-title-blue">
        nuxt-p
      </h1>
    </div>
    <div class="l-item">
      <h2 class="m-fontsize-fixed t-title-blue">
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
  grid-template-columns: repeat(3, 1fr);
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

/* Module prefix: m- */
.m-fontsize-fixed {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
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
