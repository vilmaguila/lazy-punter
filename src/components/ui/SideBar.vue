<template>
  <div class="container">
    <router-link :to="{ name: 'Address' }">Address</router-link> |
    <router-link :to="{ name: 'Ethics' }">Ethics</router-link> |
    <a>dummy</a>
  </div>
</template>

<script>
export default {
  name: "SideBar",
  data() {
    return {
      links: [
        {
          id: "addr",
          link: "address",
        },
        {
          id: "eth",
          link: "ethics",
        },
      ],
    };
  },
};
</script>

<style scoped>
.container {
    display: inline-block;
}
</style>