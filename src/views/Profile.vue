<template>
  <div class="profile">
    <navigation-bar class="col-span-4">
      <navigation-item label="Back" link="/"> </navigation-item>
      <login-logout-button></login-logout-button>
    </navigation-bar>
    <base-avenue class="col-span-4">
      <div>
        <img :src="$auth.user.value.picture" />
        <h2>{{ $auth.user.value.name }}</h2>
        <p>{{ $auth.user.value.email }}</p>
      </div>
      --------

      <!-- <div> -->
      <!-- <pre>{{ JSON.stringify($auth.user.value, null, 2) }}</pre> -->
      <!-- </div> -->
    </base-avenue>
  </div>
</template>

<script>
import NavigationBar from "@/components/ui/NavigationBar.vue";
import NavigationItem from "@/components/ui/NavigationItem.vue";
import LoginLogoutButton from "@/components/ui/LoginLogoutButton.vue";

export default {
  name: "Profile",
  components: { NavigationItem, NavigationBar, LoginLogoutButton },
};
</script>

<style lang="postcss" scoped>
.profile {
  @apply grid grid-cols-4 mx-8 my-2;
}
</style>