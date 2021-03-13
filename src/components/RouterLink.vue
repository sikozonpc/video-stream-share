<template>
  <router-link
    class="flex btn"
    :active-class="activeClass"
    :to="to"
    :exact="exact"
  >
    <SvgIcon
      v-if="icon"
      :icon="icon"
      class="mr-2"
      :width="width"
      :height="height"
      :color="color"
      :viewBox="viewBox"
    />
    <span><slot /></span>
  </router-link>
</template>

<script>
import SvgIcon, { svgIconBaseProps } from "@/components/SvgIcon.vue";

export default {
  components: { SvgIcon },
  props: {
    icon: String,
    to: {
      type: String,
      required: true,
    },
    ...svgIconBaseProps,
  },
};
</script>

<style>
</style>
