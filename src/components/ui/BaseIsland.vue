<template>
  <div class="flex flex-row flex-wrap">
    <slot></slot>
  </div>
</template>

<script>
export default {
    name: 'BaseIsland'    
}
</script>

<style lang="postcss" scoped>
div {
  @apply py-2 px-5 font-semibold rounded-lg shadow-md bg-gray-50 hover:bg-gray-200;
}
</style>