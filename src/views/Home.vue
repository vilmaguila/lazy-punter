<template>
  <div class="grid grid-cols-4 gap-4">
    <navigation-bar class="col-span-4"></navigation-bar>
    <h1>Home</h1>
    <hello-world msg="Message as a prop"></hello-world>
    <hello-world></hello-world>
    <the-footer class="col-span-4"></the-footer>
  </div>
</template>

<script>
import HelloWorld from "../components/HelloWorld.vue";
import NavigationBar from "../components/ui/NavigationBar.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    NavigationBar,
  },
};
</script>