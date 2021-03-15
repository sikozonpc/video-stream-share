<template>
  <div class="flex">
    <SideMenu class="mr-6 h-screen fixed top-0" />
    <div class="flex flex-1 min-h-screen h-full w-full text bg-secondary ml-40">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import SideMenu from "@/components/SideMenu.vue";

export default {
  name: "Layout",
  components: { SideMenu },
};
</script>

<style>
</style>