<template>
  <div class="container mx-auto min-h-screen flex flex-col">
    <div class="md:flex flex-grow">
      <main-menu
        :pages="mainMenuPages"
        class="hidden md:block w-1/5 mr-1 flex-shrink-0"
      ></main-menu>
      <div class="block md:hidden">
        <nuxt-link to="/">Home</nuxt-link>
        <nuxt-link to="/menu">Menu</nuxt-link>
      </div>
      <page-content
        :page="page"
        class="bg-white w-full md:w-4/5"
      ></page-content>
    </div>
    <div class="md:flex mt-1">
      <div class="hidden md:block w-1/5 mr-1 flex-shrink-0"></div>
      <footer-menu
        :pages="footerPages"
        class="bg-white w-full md:w-4/5"
      ></footer-menu>
    </div>
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
