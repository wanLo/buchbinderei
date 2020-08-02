<template>
  <div>
    <article>
      <img v-if="_page.image" :src="_page.image" alt="Titelbild" />
      <h1>{{ _page.title }}</h1>
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
