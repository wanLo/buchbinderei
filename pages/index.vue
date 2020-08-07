<template>
  <div class="container mx-auto min-h-screen flex flex-col px-2">
    <div class="md:flex flex-grow">
      <div class="hidden md:block w-1/5 mr-1 flex-shrink-0">
        <main-menu
          v-if="!showMenu"
          :pages="mainMenuPages"
          class="sticky top-0 pt-4 sm:pt-6 md:pt-8"
        ></main-menu>
      </div>
      <div class="block md:hidden flex mb-1">
        <nuxt-link to="/" class="flex-none" @click.native="showMenu = false">
          <img
            src="/titel.png"
            alt="Startseite"
            class="px-4 py-2"
            style="max-height: 5rem;"
          />
        </nuxt-link>
        <div class="flex-grow"></div>
        <button
          class="my-auto py-4 px-4 flex-none"
          aria-label="Menü öffnen"
          @click="showMenu = !showMenu"
        >
          <div class="bg-warmgray-dark w-8 h-1 mb-1"></div>
          <div class="bg-warmgray-dark w-8 h-1 mb-1"></div>
          <div class="bg-warmgray-dark w-8 h-1"></div>
        </button>
      </div>
      <transition name="menu-fade">
        <main-menu
          v-if="showMenu"
          :pages="completeMenuPages"
          :show-logo="false"
          @close-menu="showMenu = false"
        ></main-menu>
      </transition>
      <nuxt-child v-if="!showMenu" class="pt-4 sm:pt-6 md:pt-8"></nuxt-child>
    </div>
    <div v-if="!showMenu" class="md:flex mt-1 pb-4 sm:pb-6 md:pb-8">
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

export default {
  components: {
    MainMenu,
    FooterMenu,
  },
  async asyncData({ $content, params }) {
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
    return { mainMenuPages, footerPages, completeMenuPages }
  },
  data() {
    return {
      showMenu: false,
    }
  },
}
</script>

<style scoped>
.menu-fade-enter-active,
.menu-fade-leave-active {
  transition: 0.15s;
}
.menu-fade-enter,
.menu-fade-leave-to {
  opacity: 0;
  transform: translate(0, -20px);
}
</style>
