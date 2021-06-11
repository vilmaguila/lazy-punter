<template>
  <base-nav-item v-if="!$auth.loading.value">
    <button v-if="!$auth.isAuthenticated.value" @click="login">Log in</button>
    <button v-if="$auth.isAuthenticated.value" @click="logout">Log out</button>
  </base-nav-item>
</template>

<script>
import BaseNavItem from "@/components/ui/BaseNavItem.vue";

export default {
  name: "LoginLogoutButton",
  components: { BaseNavItem },
  methods: {
    login() {
      this.$auth.loginWithRedirect();
    },
    logout() {
      this.$auth.logout();
    },
  },
};
</script>