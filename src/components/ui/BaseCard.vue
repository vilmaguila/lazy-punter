<template>
  <div>
    <slot></slot>
  </div>
</template>

<style lang="postcss" scoped>
div {
  @apply w-48 h-40 py-2 px-4 font-semibold rounded-lg shadow-md bg-gray-50 hover:bg-gray-200;
}
</style>