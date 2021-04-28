<template>
  <div>
    <h1>Home</h1>
    <hello-world msg="Message as a prop"></hello-world>
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
};
</script>