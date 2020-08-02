<template>
  <div>
    <ul>
      <li v-for="page of _pages" :key="page.slug">
        <NuxtLink :to="page.slug">
          <div>{{ page.shortTitle }}</div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MainMenu',
  props: {
    pages: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    _pages() {
      return this.pages.map((p) => {
        if (!p.shortTitle) {
          if (!p.title)
            p.shortTitle = p.slug.charAt(0).toUpperCase() + p.slug.slice(1)
          else p.shortTitle = p.title
        }
        return p
      })
    },
  },
}
</script>
