<template>
  <div class="about">
    <h1>This is an about page</h1>
    <navigation-bar></navigation-bar>
    <router-view></router-view>
    <router-view name="mission"></router-view>
    <router-view name="vision"></router-view>
  </div>
</template>

<script>
import NavigationBar from '@/components/ui/NavigationBar.vue'

export default {
  name: 'About',
  components: {
    NavigationBar,
  }
  
}
</script>