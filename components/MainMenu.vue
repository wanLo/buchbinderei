<template>
  <div class="flex flex-col space-y-1">
    <div v-for="page of _pages" :key="page.slug" class="bg-white">
      <NuxtLink :to="page.slug">
        <div class="px-4 py-2 shortTitle">{{ page.shortTitle }}</div>
      </NuxtLink>
    </div>
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

<style>
.shortTitle {
  -webkit-hyphens: auto;
  -moz-hyphens: auto;
  hyphens: auto;
  word-wrap: break-word;
  overflow-wrap: break-word;
}
</style>
