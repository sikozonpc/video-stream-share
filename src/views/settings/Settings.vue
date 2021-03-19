<template>
  <ViewContainer
    title="Application Settings"
    description="Tweak the application as you would like"
  >
    <div class="flex flex-col text-justify">
      <p class="text mb-1 font-bold text-md">Application theme</p>

      <span class="flex text py-2 items-center text-sm">
        <span class="mr-2">Light</span>
        <ToggleSwitch :value="themeToggleValue" @input="handleToggleTheme" />
        <span class="ml-2">Dark</span>
      </span>
    </div>
  </ViewContainer>
</template>

<script lang="ts">
import { ToggleSwitch } from "@/components/toggle-switch";
import { mapState } from "vuex";
import { Store } from "@/store";
import { capitalize } from "@/utils/strings";
import darkMode, { AppThemes } from "@/utils/dark-mode";
import { ViewContainer } from "@/components/view-container";

export default {
  name: "Settings",
  components: { ToggleSwitch, ViewContainer },
  computed: mapState<Store>({
    themeLabel: (state: Store) => capitalize(state.theme),
    themeToggleValue: (state: Store) => state.theme === AppThemes.DARK,
  }),
  methods: {
    ...darkMode,
    handleToggleTheme: function (isDark: boolean) {
      const newTheme = !isDark ? AppThemes.LIGHT : AppThemes.DARK;
      this.$store.commit("setTheme", newTheme);
      this.storeThemeValueLocally(newTheme);
      this.applyTheme(newTheme);
    },
  },
};
</script>
