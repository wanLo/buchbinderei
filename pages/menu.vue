<template>
  <div class="container mx-auto min-h-screen py-4 px-2">
    <main-menu :pages="pages" class="w-full"></main-menu>
  </div>
</template>

<script>
import MainMenu from '~/components/MainMenu'

export default {
  components: {
    MainMenu,
  },
  async asyncData({ $content, params }) {
    let pages = await $content('')
      .where({ menu: 'main' })
      .only(['title', 'shortTitle', 'slug'])
      .sortBy('order', 'asc')
      .fetch()
    const footerPages = await $content('')
      .where({ menu: 'footer' })
      .only(['title', 'shortTitle', 'slug'])
      .sortBy('order', 'asc')
      .fetch()
    pages = pages.concat(footerPages)
    return { pages }
  },
}
</script>
