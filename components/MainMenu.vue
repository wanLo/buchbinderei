<template>
  <div class="flex flex-col space-y-1">
    <NuxtLink v-if="showLogo" to="/">
      <img
        src="titel.png"
        alt="Startseite"
        class="bg-white px-4 py-2 w-full object-left object-contain rounded"
        style="max-height: 5rem;"
      />
    </NuxtLink>
    <NuxtLink
      v-else
      class="px-4 py-2 bg-white rounded"
      to="/"
      :class="$route.path === '/' ? 'bg-warmgray-light' : 'bg-white'"
      @click.native="$emit('close-menu')"
    >
      Startseite
    </NuxtLink>
    <div
      v-for="page of _pages"
      :key="page.slug"
      class="rounded"
      :class="
        $route.params.slug === page.slug ? 'bg-warmgray-light' : 'bg-white'
      "
    >
      <NuxtLink :to="page.slug" @click.native="$emit('close-menu')">
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
    showLogo: {
      type: Boolean,
      default: true,
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
