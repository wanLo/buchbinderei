<template>
  <div class="text-right">
    <div
      v-for="page of _pages"
      :key="page.slug"
      class="width-auto inline-block mr-4 md:mr-6 lg:mr-8 my-2 text-xs md:text-sm hover:text-cd-red transition-colors ease-in-out duration-200"
    >
      <NuxtLink :to="page.slug">
        {{ page.shortTitle }}
      </NuxtLink>
    </div>
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
