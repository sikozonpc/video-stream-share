<template>
  <div>
    <label for="toogleA" class="flex items-center cursor-pointer">
      <div class="relative">
        <input
          id="toogleA"
          type="checkbox"
          class="hidden"
          :checked="value"
          v-bind="$attrs"
          @change="$emit('input', $event.target.checked)"
        />
        <div
          class="toggle__line w-10 h-4 bg-gray-400 rounded-full shadow-inner"
        ></div>
        <div
          class="toggle__dot absolute w-6 h-6 bg-white rounded-full shadow inset-y-0 left-0"
        ></div>
      </div>
      <div class="ml-3 text-gray-700 font-medium">
        <slot />
      </div>
    </label>
  </div>
</template>

<script lang="ts">
export default {
  props: ["value"],
  name: "ToggleSwitch",
};
</script>
               
<style>
.toggle__dot {
  top: -0.25rem;
  left: -0.25rem;
  transition: all 0.3s ease-in-out;
}

input:checked ~ .toggle__dot {
  transform: translateX(100%);
  background-color: #48bb78;
}
</style>
