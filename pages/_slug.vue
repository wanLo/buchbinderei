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
    if (!page.title) page.title = slug.charAt(0).toUpperCase() + slug.slice(1)
    const mainMenuPages = await $content('')
      .where({ menu: 'main' })
      .only(['title', 'shortTitle', 'slug'])
      .sortBy('order', 'asc')
      .fetch()
    const footerPages = await $content('')
      .where({ menu: 'footer' })
      .only(['title', 'shortTitle', 'slug'])
      .sortBy('order', 'asc')
      .fetch()
    return { page, mainMenuPages, footerPages }
  },
  head() {
    return {
      title:
        this.page.slug === 'index'
          ? 'Buchbinderei Meyer Oberlichtenau'
          : this.page.title,
      titleTemplate:
        this.page.slug === 'index'
          ? '%s'
          : '%s - Buchbinderei Meyer Oberlichtenau',
      meta: [
        {
          hid: `description`,
          name: 'description',
          content: this.page.description,
        },
        {
          hid: `og:image`,
          name: 'og:image',
          content: this.page.image,
        },
        {
          hid: `twitter:image`,
          name: 'twitter:image',
          content: this.page.image,
        },
      ],
    }
  },
}
</script>
