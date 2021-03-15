<template>
  <button :class="{ btn: !icon }">
    <slot />
    <SvgIcon
      v-if="icon"
      :icon="icon"
      :color="color"
      :height="height"
      :width="width"
    />
  </button>
</template>

<script>
import SvgIcon, { svgIconBaseProps } from "@/components/svg-icon/SvgIcon.vue";
export default {
  name: "Button",
  components: { SvgIcon },
  props: {
    icon: String,
    ...svgIconBaseProps,
  },
};
</script>

<style>
</style>