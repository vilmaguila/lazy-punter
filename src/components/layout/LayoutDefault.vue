<template>
  <navigation-bar></navigation-bar>
  <router-view></router-view>
</template>

<script>
import NavigationBar from "@/components/layout/LayoutDefault.vue";
export default {
  name: "LayoutDefault",
  components: {
    NavigationBar,
  },
};
</script>