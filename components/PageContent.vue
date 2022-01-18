<template>
  <div>
    <transition name="fade">
      <article v-if="active">
        <picture v-if="_page.image">
          <source
            :srcSet="
              require('~/static/' +
                _page.image +
                '?resize&sizes[]=300&sizes[]=600&sizes[]=1000&format=webp')
                .srcSet
            "
            type="image/webp"
          />
          <source
            :srcSet="
              require('~/static/' +
                _page.image +
                '?resize&sizes[]=300&sizes[]=600&sizes[]=1000&format=jpg')
                .srcSet
            "
            type="image/jpeg"
          />
          <img
            :src="require('~/static/' + _page.image)"
            alt="Titelbild"
            class="title-picture"
          />
        </picture>
        <h1 class="title">
          {{ _page.title }}
        </h1>
        <nuxt-content :document="_page" />
      </article>
    </transition>
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
    active: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    _page() {
      return this.page
    },
  },
  watch: {
    page(newVal, oldVal) {
      this.active = false
      setTimeout(() => {
        this.active = true
      }, 200)
    },
  },
  mounted() {
    this.active = true
  },
}
</script>

<style>
/* animations */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

/* pictures with description */
.picture-with-description {
  margin-bottom: 0rem !important;
}
.description {
  @apply border-l border-warmgray pl-2 pt-2 text-sm text-gray-400;
}

/* pictures */
.title-picture,
.nuxt-content p > picture > img {
  @apply w-full mb-6 object-center object-cover;
}
.nuxt-content p > picture > img {
  @apply mt-6;
}

/* title */
.title {
  @apply mb-6 mx-4;
  @apply text-3xl text-cd-red uppercase font-light tracking-widest leading-tight;
}

/* content */
.nuxt-content p,
.nuxt-content li {
  @apply break-words text-gray-900;
}
.nuxt-content p {
  @apply mb-6 mx-4;
}
.nuxt-content a {
  /* @apply text-cd-red; */
  @apply text-gray-800;
}
.nuxt-content h1 {
  @apply text-3xl font-bold mb-6 mx-4;
  @apply text-gray-800;
}
.nuxt-content h2 {
  @apply text-lg font-bold mb-6 mt-12 mx-4;
  @apply text-gray-800;
}
.nuxt-content ul {
  @apply mb-6 mx-4;
  @apply list-disc pl-4;
}
.nuxt-content ol {
  @apply mb-6 mx-4;
  @apply list-decimal pl-4;
}
.nuxt-content li {
  @apply pl-2;
}
.nuxt-content blockquote > p {
  @apply ml-0 my-6;
  @apply text-3xl italic font-light text-gray-800;
}

.description {
  margin-left: 0rem !important;
}

@screen md {
  .title-picture {
    @apply pr-16 mb-12;
  }
  .title {
    @apply mx-0 mb-12 text-4xl;
  }
  .nuxt-content p > picture > img {
    @apply -ml-16;
  }
  .description {
    margin-left: -4rem !important;
  }
  .nuxt-content p,
  .nuxt-content li {
    @apply ml-16 mr-0;
  }
  .nuxt-content ul,
  .nuxt-content ol {
    @apply mx-0;
  }
  .nuxt-content h1 {
    @apply text-4xl mx-0;
  }
  .nuxt-content h2 {
    @apply text-xl pl-12 mx-0;
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
  .nuxt-content p > picture > img {
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
  .nuxt-content p > picture > img {
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
