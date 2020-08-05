<template>
  <page-content
    :page="page"
    class="w-full md:w-4/5 rounded md:ml-8 lg:ml-16"
  ></page-content>
</template>

<script>
import PageContent from '~/components/PageContent'

export default {
  components: {
    PageContent,
  },
  async asyncData({ $content, params }) {
    const slug = !params.slug ? 'index' : params.slug
    const page = await $content('', slug).fetch()
    if (!page.title) page.title = slug.charAt(0).toUpperCase() + slug.slice(1)
    return { page }
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
  transition: '',
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
