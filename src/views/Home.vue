<template>
  <div class="grid grid-cols-4">
    <navigation-bar class="col-span-4">
      <navigation-item label="Home" link="/" /> |
      <navigation-item label="About" link="/about" /> |
      <button @click="login">Login</button> |
      <button @click="logout">Logout</button>
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
import YoutubeCard from "@/components/home/YoutubeCard.vue";

export default {
  name: "Home",
  components: {
    NavigationBar,
    TheHero,
    NavigationItem,
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
    load_titles() {
      fetch("http://localhost:3000/titles")
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          const results = [];
          for (const id in data.titles) {
            console.log(data);
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