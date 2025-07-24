<script setup lang="ts">
import { useMouse } from "@vueuse/core";

const test = useTestStore();
const { count, doubled } = storeToRefs(test);
const { increment } = test;
const { x, y } = useMouse();
</script>

<template>
  <div>
    <h1>{{ count }}</h1>
    <h2>{{ doubled }}</h2>
    <Button @click="increment">Increment</Button>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, quo!
    </p>
    <NuxtLink to="/dashboard">Dashboard</NuxtLink>
    <div>{{ x }}, {{ y }}</div>
  </div>
</template>
