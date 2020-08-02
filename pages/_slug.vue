<template>
  <div>
    <main-menu :pages="mainMenuPages"></main-menu>
    <hr />
    <page-content :page="page"></page-content>
    <hr />
    <footer-menu :pages="footerPages"></footer-menu>
  </div>
</template>

<script>
import MainMenu from '~/components/MainMenu'
import FooterMenu from '~/components/FooterMenu'
import PageContent from '~/components/PageContent'

export default {
  components: {
    MainMenu,
    PageContent,
    FooterMenu,
  },
  async asyncData({ $content, params }) {
    const slug = !params.slug ? 'index' : params.slug
    const page = await $content('', slug).fetch()
    const mainMenuPages = await $content('')
      .where({ menu: 'mainMenu' })
      .only(['title', 'slug'])
      .sortBy('order', 'asc')
      .fetch()
    const footerPages = await $content('')
      .where({ menu: 'footer' })
      .only(['title', 'slug'])
      .sortBy('order', 'asc')
      .fetch()
    return { page, mainMenuPages, footerPages }
  },
}
</script>
