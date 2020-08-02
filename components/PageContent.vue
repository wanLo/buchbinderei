<template>
  <div>
    <article>
      <h1>{{ page.title }}</h1>
      <nuxt-content :document="page" />
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
}
</script>
