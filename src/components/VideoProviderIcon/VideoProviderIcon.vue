<template>
  <i>
    <SvgIcon
      v-if="provider === 'youtube'"
      class="mr-2"
      color="red"
      icon="youtube"
      width="22"
      height="22"
    />
    <SvgIcon
      v-if="provider === 'vimeo'"
      class="mr-2"
      color="blue"
      icon="vimeo"
      width="22"
      height="22"
    />
    <SvgIcon
      v-if="provider === 'twitch'"
      class="mr-2"
      color="purple"
      icon="twitch"
      width="22"
      height="22"
    />
  </i>
</template>

<script lang="ts">
import SvgIcon from "@/components/SvgIcon.vue";
import props from "./VideoProviderIcon.types";

export default {
  name: "VideoProviderIcon",
  props,
  components: { SvgIcon },
};
</script>

<style>
</style>