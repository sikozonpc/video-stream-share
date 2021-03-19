<template>
  <div class="flex">
    <SideMenu v-if="routeHasSidebar()" class="mr-6 h-full w-40 fixed top-0" />
    <div
      class="flex flex-1 min-h-screen h-full w-full text bg-secondary"
      :class="{ 'ml-40': routeHasSidebar() }"
    >
      <router-view />
    </div>
  </div>
</template>

<script>
import { SideMenu } from "@/components/side-menu";
import { hasSideBar } from "@/router";

export default {
  name: "Layout",
  components: { SideMenu },
  methods: {
    routeHasSidebar() {
      const currPath = this.$route.path;
      return hasSideBar(currPath);
    },
  },
};
</script>

<style>
</style>