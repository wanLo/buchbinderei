<template>
  <div>
    <article>
      <img
        v-if="_page.image"
        :src="_page.image"
        alt="Titelbild"
        class="w-full object-cover pr-64 mb-12"
      />
      <h1
        class="text-6xl text-cd-red uppercase font-light tracking-widest mb-12"
      >
        {{ _page.title }}
      </h1>
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
.nuxt-content p > img {
  @apply -ml-64 my-16 w-full;
}
.nuxt-content p,
.nuxt-content li {
  @apply break-words ml-64;
  @apply text-gray-900;
}
.nuxt-content p {
  @apply mb-6;
}
.nuxt-content a {
  @apply text-cd-red;
}
.nuxt-content h1 {
  @apply text-3xl font-bold mb-6;
  @apply text-gray-800;
}
.nuxt-content h2 {
  @apply text-xl font-bold mb-6 mt-12 pl-56;
  @apply text-gray-800;
}
.nuxt-content ul {
  @apply mb-6;
  @apply list-disc pl-4;
}
.nuxt-content ol {
  @apply mb-6;
  @apply list-decimal pl-4;
}
.nuxt-content li {
  @apply pl-2;
}
.nuxt-content blockquote > p {
  @apply ml-0 my-16;
  @apply text-5xl italic font-light text-gray-800;
}
</style>
