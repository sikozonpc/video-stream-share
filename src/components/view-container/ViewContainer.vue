<template>
  <div class="w-full h-full mx-6">
    <Header :description="description" :title="title" />
    <slot />
  </div>
</template>

<script lang="ts">
import { props as headerProps, Header } from "@/components/header";

export default {
  name: "ViewContainer",
  components: { Header },
  props: headerProps,
};
</script>

<style>
</style>