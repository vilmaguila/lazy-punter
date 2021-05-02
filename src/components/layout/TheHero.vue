<template>
  <div class="hero">
    <slot>Default Hero Title</slot>
  </div>
</template>

<style lang="postcss" scoped>
.hero {
  @apply text-7xl py-8 text-center bg-gray-400;
}
</style>