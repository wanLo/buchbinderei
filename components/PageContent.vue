<template>
  <div>
    <article>
      <img
        v-if="_page.image"
        :src="_page.image"
        alt="Titelbild"
        class="title-picture"
      />
      <h1 class="title">
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
.picture-with-description {
  margin-bottom: 0rem !important;
}

.description {
  @apply border-l border-warmgray pl-2 pt-2 text-sm text-gray-400;
}

.title-picture {
  @apply w-full object-cover mb-6;
}
.title {
  @apply mb-6;
  @apply text-3xl text-cd-red uppercase font-light tracking-widest leading-tight;
}
.nuxt-content p > img {
  @apply my-6 w-full;
}
.nuxt-content p,
.nuxt-content li {
  @apply break-words;
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
  @apply text-lg font-bold mb-6 mt-12;
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
  @apply ml-0 my-6;
  @apply text-3xl italic font-light text-gray-800;
}

@screen md {
  .title-picture {
    @apply pr-16 mb-12;
  }
  .title {
    @apply mb-12 text-4xl;
  }
  .nuxt-content p > img {
    @apply -ml-16;
  }
  .description {
    margin-left: -4rem !important;
  }
  .nuxt-content p,
  .nuxt-content li {
    @apply ml-16;
  }
  .nuxt-content h1 {
    @apply text-4xl;
  }
  .nuxt-content h2 {
    @apply text-xl pl-12;
  }
  .nuxt-content blockquote > p {
    @apply ml-0 my-12;
    @apply text-4xl;
  }
}

@screen lg {
  .title-picture {
    @apply pr-32;
  }
  .title {
    @apply text-5xl;
  }
  .nuxt-content p > img {
    @apply -ml-32 my-16;
  }
  .description {
    margin-left: -8rem !important;
  }
  .nuxt-content p,
  .nuxt-content li {
    @apply ml-32;
  }
  .nuxt-content h1 {
    @apply text-5xl;
  }
  .nuxt-content h2 {
    @apply text-2xl pl-24;
  }
  .nuxt-content blockquote > p {
    @apply text-5xl;
  }
}

@screen xl {
  .title-picture {
    @apply pr-64;
  }
  .title {
    @apply text-6xl;
  }
  .nuxt-content p > img {
    @apply -ml-64 my-16;
  }
  .description {
    margin-left: -16rem !important;
  }
  .nuxt-content p,
  .nuxt-content li {
    @apply ml-64;
  }
  .nuxt-content h1 {
    @apply text-6xl;
  }
  .nuxt-content h2 {
    @apply text-3xl pl-56;
  }
}
</style>
