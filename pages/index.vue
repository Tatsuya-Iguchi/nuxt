<template>
  <div class="container">
    <logo />
    <h1 class="title">
      nuxt-p
    </h1>
    <h2 class="subtitle">
      nuxt
    </h2>
    <div class="item">
      <a href="https://nuxtjs.org" target="_blank" class="button--green">
        Documentation
      </a>
    </div>
    <div class="item">
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
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: grid;
  grid-template-rows: 300px 300px 1fr;
  grid-template-columns: 300px 300px 1fr;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.item {
  padding-top: 15px;
}
</style>
