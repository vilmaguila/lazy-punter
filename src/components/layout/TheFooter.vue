<template>
  <footer class="flex flex-row justify-evenly">
    <div class="">
      <h1 class="text-lg">Linkit</h1>
      <a href="https://www.google.com">Google</a>
    </div>
    <div class="">
      <h2>Yhteystiedot</h2>
      <p>Pillipiiparinpolku 1</p>
    </div>
    <div class="">
      <h2>Tietosuoja</h2>
      <a href="link">linkki</a> <br />
      <a href="link">linkki</a>
    </div>
  </footer>
</template>

<script>
export default {
  name: "TheFooter",
};
</script>

<style lang="postcss" scoped>
footer {
  @apply py-2 px-4 font-semibold bg-gray-500 font-sans; 
}
</style>