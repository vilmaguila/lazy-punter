<template>
  <base-card>
    <h1 class="text-black-500 bg-blue-500">{{ msg }}</h1>
    <button @click="count++" class="p-4 bg-blue-600 rounded-full">
      count is: {{ count }}
    </button>
    <p>
      Edit <code>components/HelloWorld.vue</code> to test hot module
      replacement.
    </p>
  </base-card>
</template>

<script>
import BaseCard from "./ui/BaseCard.vue";

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  components: {
    BaseCard,
  },
  data() {
    return {
      count: 0,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
