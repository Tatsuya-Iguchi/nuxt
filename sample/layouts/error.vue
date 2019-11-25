<template>
  <div class="container">
    <h1 v-if="error.statusCode === 404">ページが見つかりません</h1>
    <h1 v-else>エラーが発生しました</h1>
    <div class="links">
      <nuxt-link to="/">ホーム</nuxt-link>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['error'],
    layout: 'blog' // エラーページ用のカスタムレイアウトを指定できます
  }
</script>

<style>

</style>