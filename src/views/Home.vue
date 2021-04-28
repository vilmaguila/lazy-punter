<template>
  <div class="home">
    <navigation-bar></navigation-bar>
    <h1>Home</h1>
    <hello-world msg="Message as a prop"></hello-world>
    <the-footer></the-footer>
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue'
import NavigationBar from '../components/ui/NavigationBar.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    NavigationBar,
  }
};
</script>