<template>
  <div class="grid grid-cols-4">
    <div class="col-span-4">
      <navigation-bar>
        <navigation-item label="Back" link="/"> </navigation-item>
      </navigation-bar>
    </div>
  </div>
  <div>
    <img :src="$auth.user.value.picture" />
    <h2>{{ $auth.user.value.name }}</h2>
    <p>{{ $auth.user.value.email }}</p>
  </div>
  <div>
    <button>Edit</button>
  </div>
  --------

  <div>
    <pre>{{ JSON.stringify($auth.user.value, null, 2) }}</pre>
  </div>
</template>

<script>
import NavigationBar from "@/components/ui/NavigationBar.vue";
import NavigationItem from "@/components/ui/NavigationItem.vue";

export default {
  name: "Profile",
  components: { NavigationItem, NavigationBar }
};
</script>