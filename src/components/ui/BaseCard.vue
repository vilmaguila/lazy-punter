<template>
  <div>
    <slot></slot>
  </div>
</template>

<style lang="postcss" scoped>
div {
  @apply py-2 px-4 font-semibold rounded-lg shadow-md bg-gray-50 hover:bg-gray-100;
}
</style>