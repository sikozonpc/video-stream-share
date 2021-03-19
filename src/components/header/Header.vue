<template>
  <header
    class="flex flex-col items-start justify-start text-left my-2 sticky top-0 py-2 pt-4 bg-secondary w-full border-secondary"
  >
    <h1 class="font-bold text-2xl">
      {{ title }}
    </h1>
    <span class="text-secondary">
      {{ description }}
    </span>
  </header>
</template>

<script lang="ts">
import { props } from "./Header.types";

export default {
  name: "Header",
  props,
};
</script>

<style>
</style>