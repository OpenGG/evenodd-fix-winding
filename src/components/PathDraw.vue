<script setup lang="ts">
import { ref, onMounted } from "vue";

import type { SVG } from "../types";

const props = defineProps<{
  title: string;
  svg: SVG;
  unwind: (d: string) => Promise<string>;
}>();

const unwinded = ref("");

onMounted(async () => {
  const out = await props.unwind(props.svg.d);

  unwinded.value = out;
});
</script>

<template>
  <div>{{ title }}</div>

  <svg :viewBox="svg.viewBox">
    <path :d="svg.d" fill="red" fill-rule="evenodd" />
  </svg>
  <svg :viewBox="svg.viewBox"><path :d="unwinded" fill="red" /></svg>
</template>

<style scoped>
svg {
  width: 100px;
  height: 100px;
}
</style>
