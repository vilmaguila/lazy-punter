<template>
  <div class="home">
    <navigation-bar class="col-span-4">
      <navigation-item label="Home" link="/" />
      <navigation-item label="About" link="/about" />
      <navigation-item
        v-if="$auth.isAuthenticated.value"
        label="Profile"
        link="/profile"
      ></navigation-item>
      <login-logout-button></login-logout-button>
    </navigation-bar>
    <the-hero class="col-span-4">Löydä vireesi täältä</the-hero>
    <div>This is for SideBar</div>
    <base-island class="col-span-3">
      <youtube-card
        v-for="item in titles"
        :key="item.id"
        v-bind="item"
      ></youtube-card>
    </base-island>
    <the-footer class="col-span-4"></the-footer>
  </div>
</template>

<script>
import NavigationBar from "../components/ui/NavigationBar.vue";
import TheHero from "@/components/layout/TheHero.vue";
import NavigationItem from "@/components/ui/NavigationItem.vue";
import LoginLogoutButton from "@/components/ui/LoginLogoutButton.vue";
import YoutubeCard from "@/components/home/YoutubeCard.vue";

export default {
  name: "Home",
  components: {
    NavigationBar,
    TheHero,
    NavigationItem,
    LoginLogoutButton,
    YoutubeCard,
  },
  data() {
    return {
      titles: [],
    };
  },
  mounted() {
    this.load_titles();
  },
  methods: {
    async load_titles() {
      const token = await this.$auth.getTokenSilently();
      fetch("http://localhost:3000/api/titles", {
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
          const results = [];
          for (const id in data.titles) {
            results.push({
              id: data.titles[id].id,
              title: data.titles[id].title,
              artist: data.titles[id].artist,
              url: data.titles[id].url,
            });
          }
          this.titles = results;
        });
    },
  },
};
</script>

<style lang="postcss" scoped>
.home {
  @apply grid grid-cols-4 mx-8 my-2;
}
</style>