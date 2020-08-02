<template>
  <div>
    <ul>
      <li v-for="page of pages" :key="page.slug">
        <NuxtLink :to="page.slug">
          <div>
            {{ page.title }}
          </div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'FooterMenu',
  props: {
    pages: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
