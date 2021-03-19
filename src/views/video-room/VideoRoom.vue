<template>
  <ViewContainer :title="room.title" :description="room.description">
    <div>
      <RouterLink to="/">Back</RouterLink>
    </div>
  </ViewContainer>
</template>

<script lang="ts">
import RouterLink from "@/components/RouterLink.vue";
import { ViewContainer } from "@/components/view-container";
import { FeedItem } from "../feed/Feed.types";

export default {
  components: { RouterLink, ViewContainer },
  data() {
    return {
      room: null,
    };
  },
  created() {
    this.room = this.$store.state.feed.find(
      (r: FeedItem) => String(r.id) === String(this.$route.params.id)
    );
  },
  name: "VideoRoom",
};
</script>

<style>
</style>