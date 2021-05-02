<template>
  <div class="flexbox flex-col">
    <slot></slot>
  </div>
</template>

<script>
export default {
    name: 'BaseAvenue'    
}
</script>

<style lang="postcss" scoped>
div {
  @apply py-2 px-5 font-semibold rounded-lg shadow-md bg-gray-50 hover:bg-gray-200;
}
</style>