<template>
  <section class="my-5 mx-auto">
    <div class="d-md-flex my-4 align-items-center">
      <logo color="#252525" />
      <h1 class="title">GitHub Search</h1>
    </div>
    <p class="subtitle">Search for awesome repositories</p>
  </section>
</template>

<script lang="ts">
import Logo from '~/components/icons/Logo.vue'

export default {
  components: { Logo },
}
</script>

<style scoped>
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 3rem;
  line-height: 3rem;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 2rem;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
</style>
