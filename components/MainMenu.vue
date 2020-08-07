<template>
  <div class="flex flex-col space-y-2 text-gray-900">
    <NuxtLink v-if="showLogo" to="/">
      <picture>
        <source
          :srcSet="require('~/static/titel.png?webp&inline')"
          type="image/webp"
        />
        <source :srcSet="require('~/static/titel.png')" type="image/png" />
        <img
          :src="require('~/static/titel.png')"
          alt="Logo der Buchbinderei Meyer"
          class="px-4 py-2 w-full h-16 lg:h-20 object-left object-contain"
        />
      </picture>
    </NuxtLink>
    <NuxtLink
      v-else
      class="px-4 py-2 rounded"
      to="/"
      :class="$route.path === '/' ? 'bg-warmgray-light' : 'bg-none'"
      @click.native="$emit('close-menu')"
    >
      Startseite
    </NuxtLink>
    <div
      v-for="page of _pages"
      :key="page.slug"
      class="rounded transition-colors ease-in-out duration-500"
      :class="
        $route.params.slug === page.slug ? 'bg-warmgray-light' : 'border-none'
      "
    >
      <NuxtLink :to="'/' + page.slug" @click.native="$emit('close-menu')">
        <div
          class="px-4 py-2 break-words md:hover:text-cd-red transition-colors ease-in-out duration-200"
        >
          {{ page.shortTitle }}
        </div>
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
