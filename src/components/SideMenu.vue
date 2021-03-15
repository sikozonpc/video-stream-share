<template>
  <div class="flex">
    <div class="flex flex-col">
      <ul class="flex flex-col p-2 h-full">
        <RouterLink to="/" icon="home" color="gray" class="mb-2"
          >Feed
        </RouterLink>
        <RouterLink
          class="mb-2"
          to="/categories"
          icon="grid"
          color="gray"
          viewBox="0 0 23 23"
          width="23"
          height="23"
        >
          Category
        </RouterLink>
        <RouterLink
          class="mb-2"
          to="/profile"
          icon="profile"
          color="gray"
          viewBox="0 0 23 23"
          width="23"
          height="23"
        >
          Profile
        </RouterLink>
      </ul>
    </div>
    <div class="flex flex-col"></div>
  </div>
</template>

<script lang="ts">
import RouterLink from "@/components/RouterLink.vue";

export default {
  name: "SideMenu",
  components: { RouterLink },
};
</script>

<style>
</style>