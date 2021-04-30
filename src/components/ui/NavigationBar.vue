<template>
  <nav class="nav">
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
.nav {
  @apply text-center py-4;
}
</style>