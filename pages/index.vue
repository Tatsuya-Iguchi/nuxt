<template>
  <div class="l-container">
    <div class="l-item l-header b-background-gray">
      <h1 class="m-font-big">hogehoge</h1>
    </div>
    <div class="l-item">
      <logo class="m-icon-midium" />
    </div>
    <div class="l-item">
      <h1 class="m-font-big t-title-blue">
        nuxt-p
      </h1>
    </div>
    <div class="l-item">
      <Seikaku class="m-icon-midium" />
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
    <div class="l-item l-footer b-background-gray">
      <h1 class="m-font-big">fugafuga</h1>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Seikaku from '~/assets/image/Seikaku.svg'

export default {
  components: {
    Logo,
    Seikaku
  }
}
</script>

<style>
/* Base prefix: b- */
.b-background-gray {
  background: #aaaaaa;
}
/* Layout prefix: l- */
.l-container {
  margin: 0 auto;
  min-height: 100vh;
  min-width: 100vh;
  display: grid;
  grid-template-rows: 60px repeat(3, 1fr) 60px;
  grid-auto-rows: 600px;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  text-align: center;
}

.l-item {
  display: inline-grid;
  align-items: center;
  justify-items: center;
  min-width: 300px;
  text-align: center;
}

.l-header {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 2;
}

.l-footer {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 5;
  grid-row-end: 6;
}

/* Module prefix: m- */
.m-font-big {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: grid;
  font-weight: 300;
  font-size: 36px;
  letter-spacing: 1px;
}

.m-icon-midium {
  text-align: center;
  height: 160px;
  width: 160px;
  max-width: 50%;
}
/* State prefix: s- */
/* Theme prefix: t- */
.t-title-blue {
  color: #526488;
}
</style>
