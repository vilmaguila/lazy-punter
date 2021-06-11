<template>
  <base-nav-item>
    <router-link :to="link">
      <button>{{ label }}</button>
    </router-link>
  </base-nav-item>
</template>

<script>
import BaseNavItem from "@/components/ui/BaseNavItem.vue";

export default {
  name: "NavigationItem",
  components: { BaseNavItem },
  props: {
    label: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: false,
    },
  },
};
</script>