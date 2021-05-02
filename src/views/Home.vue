<template>
  <div class="grid grid-cols-4">
    <navigation-bar class="col-span-4">
      <navigation-item label="Home" link="/" /> |
      <navigation-item label="About" link="/about" />
    </navigation-bar>
    <the-hero class="col-span-4">Löydä vireesi täältä</the-hero>
    <div>This is for SideBar</div>
    <base-avenue class="col-span-3">
      This is for main content
      <hello-world msg="Message as a prop"></hello-world>
      <hello-world></hello-world>
    </base-avenue>
    <the-footer class="col-span-4"></the-footer>
  </div>
</template>

<script>
import HelloWorld from "../components/HelloWorld.vue";
import NavigationBar from "../components/ui/NavigationBar.vue";
import TheHero from "@/components/layout/TheHero.vue";
import NavigationItem from "@/components/ui/NavigationItem.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    NavigationBar,
    TheHero,
    NavigationItem,
  },
};
</script>