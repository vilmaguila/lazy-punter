<template>
  <nav>
    <slot></slot>
  </nav>
</template>

<script>
//import NavItem from '@/components/ui/NavigationItem.vue'

export default {
  name: "NavigationBar",
};
</script>

<style lang="postcss" scoped>
nav {
  @apply flex flex-row text-center justify-center px-2 py-2;
}
</style>