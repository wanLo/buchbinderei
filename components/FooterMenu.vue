<template>
  <div>
    <ul>
      <li v-for="page of _pages" :key="page.slug">
        <NuxtLink :to="page.slug">
          <div>
            {{ page.shortTitle }}
          </div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'FooterMenu',
  props: {
    pages: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    _pages() {
      return this.pages.map((p) => {
        p.shortTitle = p.slug.charAt(0).toUpperCase() + p.slug.slice(1)
        return p
      })
    },
  },
}
</script>
