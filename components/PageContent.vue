<template>
  <div class="p-4 md:px-6 lg:px-8">
    <article>
      <img
        v-if="_page.image"
        :src="_page.image"
        alt="Titelbild"
        class="titelbild mb-4"
      />
      <h1 class="heading">{{ _page.title }}</h1>
      <nuxt-content :document="_page" />
    </article>
  </div>
</template>

<script>
export default {
  name: 'PageContent',
  props: {
    page: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    _page() {
      return this.page
    },
  },
}
</script>

<style>
.titelbild {
  @apply w-full object-contain object-left;
  max-height: 40vh;
}
.nuxt-content p {
  @apply mb-2 break-words;
}
.nuxt-content a {
  @apply text-cd-red;
}
.heading,
.nuxt-content h1 {
  @apply text-xl font-bold mb-2;
}
.nuxt-content h2 {
  @apply text-lg font-bold mb-2;
}
.nuxt-content ul {
  @apply mb-2;
}
</style>
