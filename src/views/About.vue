<template>
  <div class="about">
    <navigation-bar class="col-span-4">
      <navigation-item label="Home" link="/" />
      <navigation-item label="About" link="/about" />
    </navigation-bar>

    <p>Sidebar should take 1/4</p>
    <base-avenue class="col-span-3">
      <p>Jotain tekstiä {{ apiMessage }}</p>
    </base-avenue>
    <the-footer class="col-span-4"></the-footer>
  </div>
</template>

<script>
// import SideBar from "@/components/ui/SideBar.vue";
import NavigationBar from "@/components/ui/NavigationBar.vue";
import NavigationItem from "@/components/ui/NavigationItem.vue";

export default {
  name: "About",
  components: {
    // SideBar,
    NavigationBar,
    NavigationItem,
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
  @apply grid grid-cols-4;
}
</style>