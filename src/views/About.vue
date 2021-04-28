<template>
  <div class="about">
    <navigation-bar></navigation-bar>
    <h1>This is an about page</h1>
    <side-bar></side-bar>
    <router-view name="default"></router-view>
    <router-view name="mission"></router-view>
    <router-view name="vision"></router-view>
    <the-footer></the-footer>
  </div>
</template>

<script>
import SideBar from "@/components/ui/SideBar.vue";
import NavigationBar from "@/components/ui/NavigationBar.vue";

export default {
  name: "About",
  components: {
    SideBar,
    NavigationBar,
  },
};
</script>

<style scoped>
.about {
  display: grid;
}
</style>