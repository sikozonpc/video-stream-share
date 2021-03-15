<template>
  <div>
    <header
      class="flex flex-col items-start justify-start text-left mt-2 ml-6 sticky top-0 py-2 pt-4 bg-secondary w-full border-secondary"
    >
      <h1 class="font-bold text-2xl">Feed</h1>
      <span class="text-secondary"
        >Find and join a room to watch videos with other people or create one to
        watch with friends.</span
      >
    </header>

    <div class="mt-14">
      <RoomTile v-for="f in feed" :key="f.id" :feedItem="f" />
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