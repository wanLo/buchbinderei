<template>
  <article>
    <h1>{{ page.title }}</h1>
    <nuxt-content :document="page" />
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const slug = !params.slug ? 'index' : params.slug
    const page = await $content('', slug).fetch()
    return { page }
  },
}
</script>
