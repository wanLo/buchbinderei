<template>
  <div>
    <article>
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
      const page = this.page
      if (!page.title)
        page.title = page.slug.charAt(0).toUpperCase() + page.slug.slice(1)
      return page
    },
  },
}
</script>
