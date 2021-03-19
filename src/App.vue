<template>
  <div id="app" class="body">
    <Layout />
  </div>
</template>

<script lang="ts">
import { Layout } from "@/components/layout";
import darkMode from "@/utils/dark-mode";
import { mapState } from "vuex";

export default {
  name: "App",
  components: { Layout },
  computed: mapState(["theme"]),
  created() {
    const initialTheme = this.getTheme();
    this.applyTheme(initialTheme);
    this.$store.commit("setTheme", initialTheme);

    // listen for changes in OS theme
    window.matchMedia("(prefers-color-scheme: dark)").addListener((e) => {
      const osTheme = this.getOSTheme() || e.matches;
      this.applyTheme(osTheme);
      this.$store.commit("setTheme", osTheme);
    });
  },
  methods: {
    ...darkMode,
  },
};
</script>


<style >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
html {
  box-sizing: border-box;
}

* {
  box-sizing: inherit;
}
</style>
