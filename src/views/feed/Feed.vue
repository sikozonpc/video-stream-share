<template>
  <div>
    <header class="flex flex-col items-start justify-start text-left mt-6 ml-6">
      <h1 class="font-bold text-2xl">Feed</h1>
      <span class="text-secondary"
        >Find and join a room to watch videos with other people or create one to
        watch with friends.</span
      >
    </header>

    <div class="mt-14">
      <RoomTile
        v-for="f in feed"
        :key="f.id"
        :title="f.title"
        :description="f.description"
        :provider="f.provider"
        :roomID="f.id"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { mapState } from "vuex";
import RoomTile from "./RoomTile.vue";

export default {
  name: "Feed",
  components: { RoomTile },
  computed: mapState(["feed"]),
};
</script>