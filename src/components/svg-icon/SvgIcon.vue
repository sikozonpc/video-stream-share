<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    :viewBox="ajustedViewBox"
    :aria-labelledby="icon"
    role="presentation"
    v-bind="$attrs"
  >
    <title :id="icon" lang="en">{{ icon }} icon</title>
    <path :fill="color" :d="path" />
  </svg>
</template>

<script lang="ts">
import iconPaths from "./iconPaths";
import { IconPaths } from "./SvgIcon.types";

export const svgIconBaseProps = {
  color: { type: String, default: "#333333" },
  width: { type: String, default: "18" },
  height: { type: String, default: "18" },
  viewBox: { type: String, default: "0 0 18 18" },
  exact: { type: Boolean, default: true },
  activeClass: { type: String, default: "btn-active" },
};

export default {
  name: "SvgIcon",
  props: {
    icon: {
      type: String,
      required: true,
      validator: (icon: string) => Object.keys(iconPaths).includes(icon),
    },
    ...svgIconBaseProps,
  },
  computed: {
    path(): string {
      return iconPaths[this.icon as IconPaths];
    },
    ajustedViewBox(): string {
      const vb = this.width || this.height;
      if (!vb) return this.viewBox;

      return `0 0 ${vb} ${vb}`;
    },
  },
};
</script>