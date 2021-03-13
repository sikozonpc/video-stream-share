<template>
  <div id="nav">
    <SideMenu />
    <router-view />
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