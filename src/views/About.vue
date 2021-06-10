<template>
  <div class="about">
    <navigation-bar>
      <navigation-item label="Home" link="/" />
      <navigation-item label="About" link="/about" />
    </navigation-bar>
   
    <side-bar> <p>{{ apiMessage }}</p></side-bar>
    <!-- <router-view name="default"></router-view>
    <router-view name="mission"></router-view>
    <router-view name="vision"></router-view> -->
    <the-footer></the-footer>
  </div>
</template>

<script>
import SideBar from "@/components/ui/SideBar.vue";
import NavigationBar from "@/components/ui/NavigationBar.vue";
import NavigationItem from "@/components/ui/NavigationItem.vue";

export default {
  name: "About",
  components: {
    SideBar,
    NavigationBar,
    NavigationItem,
  },
  data() {
    return {
      apiMessage: "",
    };
  },
  created() {
    this.fetchAbout()
  },
  methods: {
    async fetchAbout() {
      const token = await this.$auth.getTokenSilently();
      const {data} = await fetch("http://localhost:3000/api/private-about", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });
      this.apiMessage = data
    },
  },
};
</script>

<style scoped>
.about {
  display: grid;
}
</style>