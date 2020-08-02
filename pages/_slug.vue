<template>
  <div
    class="container mx-auto min-h-screen flex flex-col py-4 sm:py-6 md:py-8 px-2"
  >
    <div class="md:flex flex-grow">
      <main-menu
        v-if="!showMenu"
        :pages="mainMenuPages"
        class="hidden md:block w-1/5 mr-1 flex-shrink-0"
      ></main-menu>
      <div class="block md:hidden flex bg-white mb-1 rounded">
        <nuxt-link to="/" class="flex-none" @click="showMenu = false">
          <img
            src="logo_ohne_slogan.png"
            alt="Startseite"
            class="px-4 py-2"
            style="max-height: 5rem;"
          />
        </nuxt-link>
        <div class="flex-grow"></div>
        <button class="my-auto px-4 flex-none" @click="showMenu = !showMenu">
          <div class="bg-gray-600 w-8 h-1 mb-1"></div>
          <div class="bg-gray-600 w-8 h-1 mb-1"></div>
          <div class="bg-gray-600 w-8 h-1"></div>
        </button>
      </div>
      <main-menu
        v-if="showMenu"
        :pages="completeMenuPages"
        :show-logo="false"
        @close-menu="showMenu = false"
      ></main-menu>
      <page-content
        v-if="!showMenu"
        :page="page"
        class="bg-white w-full md:w-4/5 rounded"
      ></page-content>
    </div>
    <div v-if="!showMenu" class="md:flex mt-1">
      <div class="hidden md:block w-1/5 mr-1 flex-shrink-0"></div>
      <footer-menu
        :pages="footerPages"
        class="bg-white w-full md:w-4/5 rounded"
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
      .skip(1)
      .fetch()
    const footerPages = await $content('')
      .where({ menu: 'footer' })
      .only(['title', 'shortTitle', 'slug'])
      .sortBy('order', 'asc')
      .fetch()
    const completeMenuPages = mainMenuPages.concat(footerPages)
    return { page, mainMenuPages, footerPages, completeMenuPages }
  },
  data() {
    return {
      showMenu: false,
    }
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
