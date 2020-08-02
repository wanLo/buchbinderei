<template>
  <div class="flex flex-col space-y-1">
    <NuxtLink to="/">
      <img
        src="logo_ohne_slogan.png"
        alt="Startseite"
        class="bg-white px-4 py-2 w-full object-left object-contain rounded"
        style="max-height: 5rem;"
      />
    </NuxtLink>
    <div
      v-for="page of _pages"
      :key="page.slug"
      class="rounded"
      :class="$route.params.slug === page.slug ? 'bg-gray-200' : 'bg-white'"
    >
      <NuxtLink :to="page.slug">
        <div class="px-4 py-2 break-words">{{ page.shortTitle }}</div>
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
