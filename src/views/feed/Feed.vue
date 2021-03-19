<template>
  <ViewContainer
    title="Feed"
    description="Find and join a room to watch videos with other people or create one to
        watch with friends."
  >
    <div class="mt-14 h-full">
      <RoomTile v-for="f in feed" :key="f.id" :feedItem="f" class="mb-6" />
    </div>
  </ViewContainer>
</template>

<script lang="ts">
import { mapState } from "vuex";
import RoomTile from "./RoomTile.vue";
import { ViewContainer } from "@/components/view-container";

export default {
  name: "Feed",
  components: { RoomTile, ViewContainer },
  computed: mapState(["feed"]),
};
</script>