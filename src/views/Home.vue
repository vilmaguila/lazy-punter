<template>
  <div class="grid grid-cols-4 gap-4">
    <navigation-bar class="col-span-4"></navigation-bar>
    <h1 class="col-span-4">Home</h1>
    <div>This is for SideBar</div>
    <div class="col-span-3">
      This is for main content
      <hello-world msg="Message as a prop"></hello-world>
      <hello-world></hello-world>
    </div>
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