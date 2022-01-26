<template>
  <div v-for="svg in svgs" :key="svg">
    {{ svg.name }}
    <PathDraw v-if="svg.d" title="unwind" :svg="svg" :unwind="unwind" />
    <PathDraw v-if="svg.d" title="unwind-rs" :svg="svg" :unwind="unwindRs" />
  </div>
</template>

<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { onMounted, ref } from "vue";
import PathDraw from "./components/PathDraw.vue";
import { d } from "./constants";
import { get, post } from "./ajax";
import parseSvg from "./parseSvg";
import * as svgModule from "./svg";
import type { SVG } from "./types";

const svgs = ref(
  Object.keys(svgModule).map(
    (name): SVG => ({
      name,
      url: svgModule[name],
      d: "",
      viewBox: "",
    })
  )
);

const loadSvg = async (svg: SVG) => {
  const content = await get(svg.url);
  const [viewBox, evenOddPath] = parseSvg(content);

  svg.viewBox = viewBox;

  svg.d = evenOddPath;
};

onMounted(async () => {
  await Promise.all(svgs.value.map(loadSvg));
});

const unwind = (d: string) => post("/api/unwind", d);
const unwindRs = (d: string) => post("/api/unwind-rs", d);
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
