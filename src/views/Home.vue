<template>
  <div class="grid grid-cols-4">
    <navigation-bar class="col-span-4">
      <navigation-item label="Home" link="/" /> |
      <navigation-item label="About" link="/about" />
    </navigation-bar>
    <the-hero class="col-span-4">Löydä vireesi täältä</the-hero>
    <div>This is for SideBar</div>
    <base-avenue class="col-span-3">
      <youtube-card
        v-for="item in singles"
        :key="item.id"
        v-bind="item"
      ></youtube-card>
    </base-avenue>
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
      singles: [
        {
          id: "juoksevaan",
          title: "Juokse Vaan",
          artist: "Punomo",
          url: "https://www.youtube.com/embed/vnjc2q4dTKo",
        },
        {
          id: "siskot",
          title: "Siskot",
          artist: "Punomo",
          url: "https://www.youtube-nocookie.com/embed/xLEXmApp5Iw",
        },
        {
          id: "onnikaantyy",
          title: "Onni kääntyy",
          artist: "Punomo",
          url: "https://www.youtube.com/embed/JFemZEYMih8",
        },
        {
          id: "koivutonnesta",
          title: "Koivut onnesta",
          artist: "Joana & Bossakopla",
          url: "https://www.youtube-nocookie.com/embed/Ft9rLyHWGRo",
        },
      ],
    };
  },
};
</script>