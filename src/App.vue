<template>
  <navigation-bar></navigation-bar>
  <router-view></router-view>
  <the-footer></the-footer>
</template>

<script>
import NavigationBar from "@/components/ui/NavigationBar.vue";
import TheFooter from "@/components/ui/TheFooter.vue";

export default {
  name: "App",
  components: {
    NavigationBar,
    TheFooter,
  },
};
</script>
