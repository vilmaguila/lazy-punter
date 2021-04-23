<template>
  <navigation-bar></navigation-bar>
  <router-view />
</template>

<script>
import NavigationBar from "@/components/layouts/NavigationBar.vue";
export default {
  name: "App",
  components: {
    NavigationBar,
  },
};
</script>
