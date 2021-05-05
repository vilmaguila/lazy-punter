<template>
  <base-card>
    <iframe
      class="rounded-lg"
      width="100%"
      height="100rem"
      :src="url"
      frameborder="0"
      allow="autoplay; encrypted-media"
      allowfullscreen
    ></iframe>
    <p class="text-center">{{ title }}</p>
    <p class="text-center">{{ artist }}</p>
  </base-card>
</template>

<script>
export default {
  name: "YoutubeCard",
  props: {
    id: {
      type: String,
    },
    title: {
      type: String,
    },
    artist: {
      type: String,
    },
    url: {
      type: String,
      required: true,
    },
  },
};
</script>