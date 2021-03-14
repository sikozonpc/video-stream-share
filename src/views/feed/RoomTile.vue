<template>
  <router-link
    class="m-6 text-left w-full dark:bg-gray-800 border border-gray-300 dark:border-gray-600 p-4 rounded shadow-sm cursor-pointer roomTile"
    :to="`/r/${roomID}`"
  >
    <div class="flex items-center w-full">
      <div class="flex flex-1 flex-col">
        <div class="flex">
          <VideoProviderIcon :provider="provider" />
          <h3 class="font-bold text-lg">{{ title }}</h3>
        </div>

        <span class="text-secondary" v-if="description">{{ description }}</span>
      </div>

      <Button
        color="gray"
        icon="play"
        width="25"
        height="25"
        @click="console.log('hello')"
      />
    </div>
  </router-link>
</template>


<script lang="ts">
import Button from "@/components/Button.vue";
import VideoProviderIcon from "@/components/VideoProviderIcon/VideoProviderIcon.vue";
import videoProviderProps from "@/components/VideoProviderIcon/VideoProviderIcon.types";
import RouterLink from "@/components/RouterLink.vue";

export default {
  name: "RoomTile",
  components: { VideoProviderIcon, Button, RouterLink },
  props: {
    title: { type: String, required: true },
    roomID: { type: [String, Number], required: true },
    description: String,
    ...videoProviderProps,
  },
};
</script>

<style>
.roomTile > span {
  width: 100%;
}
</style>