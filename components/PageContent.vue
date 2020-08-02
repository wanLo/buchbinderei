<template>
  <div class="p-2 sm:p-4">
    <article>
      <img v-if="_page.image" :src="_page.image" alt="Titelbild" />
      <h1 class="heading">{{ _page.title }}</h1>
      <nuxt-content :document="_page" />
    </article>
  </div>
</template>

<script>
export default {
  name: 'PageContent',
  props: {
    page: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    _page() {
      return this.page
    },
  },
}
</script>

<style>
.nuxt-content p {
  -webkit-hyphens: auto;
  -moz-hyphens: auto;
  hyphens: auto;
  word-wrap: break-word;
  overflow-wrap: break-word;
  text-align: justify;
  @apply mb-2;
}
.nuxt-content a {
  color: #d9183b;
}
.heading,
.nuxt-content h1 {
  @apply text-xl font-bold mb-2;
}
.nuxt-content h2 {
  @apply text-lg font-bold mb-2;
}
.nuxt-content ul {
  @apply mb-2;
}
</style>
