<template>
  <div>
    <slot></slot>
  </div>
</template>

<style lang="postcss" scoped>
div {
  @apply px-4 py-2 font-semibold rounded-lg shadow-md bg-gray-50 hover:bg-gray-200;
}
</style>