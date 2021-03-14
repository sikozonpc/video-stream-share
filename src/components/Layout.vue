<template>
  <div class="flex">
    <SideMenu class="mr-6 h-screen" />
    <div class="flex flex-1 max-h-screen w-full text bg-secondary">
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