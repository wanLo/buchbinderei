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
    for (const i in page.body.children) {
      if (page.body.children[i].children) {
        let range = page.body.children[i].children.length
        for (let j = 0; j < range; j++) {
          const grandchild = page.body.children[i].children[j]
          if (grandchild.tag === 'img' && grandchild.props.alt) {
            range++
            const description = {
              type: 'element',
              tag: 'p',
              props: { class: 'description' },
              children: [
                {
                  type: 'text',
                  value: grandchild.props.alt,
                },
              ],
            }
            grandchild.props.class = 'picture-with-description'
            page.body.children[i].children.splice(j + 1, 0, description)
          }
        }
      }
    }
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
  scrollToTop: true,
}
</script>
