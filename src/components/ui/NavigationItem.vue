<template>
  <router-link class="nav-item" :to="link">{{ label }}</router-link>
</template>

<script>
export default {
  name: "NavigationItem",
  props: {
    label: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: false,
    },
  },
};
</script>

<style lang="postcss" scoped>
.nav-item {
  @apply p-4 text-2xl text-center rounded-2xl hover:bg-gray-200;
}
</style>