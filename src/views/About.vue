<template>
  <div class="about">
    <navigation-bar class="col-span-4">
      <navigation-item label="Home" link="/" />
      <navigation-item label="About" link="/about" />
      <login-logout-button></login-logout-button>
      <navigation-item
        v-if="$auth.isAuthenticated.value"
        label="Profile"
        link="/profile"
      ></navigation-item>
    </navigation-bar>

    <base-avenue>
      <p>Rivi</p>
      <p>rivi 2</p>
    </base-avenue>
    <base-avenue class="col-span-3 mx-auto">
      {{ apiMessage }}
    </base-avenue>
    <the-footer class="col-span-4"></the-footer>
  </div>
</template>

<script>
// import SideBar from "@/components/ui/SideBar.vue";
import NavigationBar from "@/components/ui/NavigationBar.vue";
import NavigationItem from "@/components/ui/NavigationItem.vue";
import LoginLogoutButton from "@/components/ui/LoginLogoutButton.vue";

export default {
  name: "About",
  components: {
    // SideBar,
    NavigationBar,
    NavigationItem,
    LoginLogoutButton,
  },
  data() {
    return {
      apiMessage: "",
    };
  },
  created() {
    this.fetchAbout();
  },
  methods: {
    async fetchAbout() {
      const token = await this.$auth.getTokenSilently();
      fetch("http://localhost:3000/api/private-about", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          this.apiMessage = data;
        });
    },
  },
};
</script>

<style lang='postcss' scoped>
.about {
  @apply grid grid-cols-4 mx-8 my-2;
}
</style>