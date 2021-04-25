<template>
  <div class="about">
    <h1>This is an about page</h1>
    <side-bar></side-bar>
    <router-view></router-view>
    <router-view name="mission"></router-view>
    <router-view name="vision"></router-view>
  </div>
</template>

<script>
import SideBar from '@/components/ui/SideBar.vue'

export default {
  name: 'About',
  components: {
    SideBar,
  }
  
}
</script>

<style scoped>
.about {
  display: grid
}
</style>