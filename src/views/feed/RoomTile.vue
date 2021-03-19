<template>
  <router-link
    class="text-left w-full dark:bg-gray-800 border border-gray-300 dark:border-gray-600 p-4 rounded shadow-sm cursor-pointer roomTile"
    :to="`/r/${feedItem.id}`"
  >
    <div class="flex items-center w-full">
      <div class="flex flex-1 flex-col">
        <div class="flex">
          <VideoProviderIcon
            v-for="provider in feedItem.providers"
            :key="provider"
            :provider="provider"
          />
          <h3 class="font-bold text-lg">{{ feedItem.title }}</h3>
        </div>

        <span class="text-secondary" v-if="feedItem.description">
          {{ feedItem.description }}
        </span>
      </div>

      <Button color="gray" icon="play" width="25" height="25" />
    </div>
  </router-link>
</template>


<script lang="ts">
import { PropType } from "vue";
import Button from "@/components/Button.vue";
import VideoProviderIcon from "@/components/video-provider-icon/VideoProviderIcon.vue";
import RouterLink from "@/components/RouterLink.vue";
import { FeedItem } from "./Feed.types";

export default {
  name: "RoomTile",
  components: { VideoProviderIcon, Button, RouterLink },
  props: {
    feedItem: {
      type: Object as PropType<FeedItem>,
      required: true,
    },
  },
};
</script>

<style>
.roomTile > span {
  width: 100%;
}
</style>