<template>
  <section class="container">
    <div>
      <h1>usersのindexページです。</h1>
      <p>count={{count}}</p>
      <button @click="addCount">カウントアップ</button>
      <button @click="subtractCount">カウントダウン</button>
    </div>
  </section>
</template>

<script>
  export default {
    computed: {
      count () { return this.$store.state.counter.count }
    },
    methods: {
      addCount (e) {
        this.$store.commit('counter/add')
      },
      subtractCount (e) {
        this.$store.commit('counter/subtract')
      }
    }
  }
</script>