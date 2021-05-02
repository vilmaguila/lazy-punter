<template>
  <base-card>
    <h2>{{ title }}</h2>
    <h3>{{ artist }}</h3>
    <iframe
      width="20%"
      height=""
      :src="url"
      frameborder="0"
      allow="autoplay; encrypted-media"
      allowfullscreen
    ></iframe>
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