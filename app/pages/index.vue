<script setup lang="ts">
import { useMouse } from "@vueuse/core";
import { commands } from "~/lib/bindings";

const test = useTestStore();
const { count, doubled } = storeToRefs(test);
const { increment } = test;
const { x, y } = useMouse();
const results = ref("");
const name = ref("");

const handleGreet = async () => {
  const n = await commands.greet(name.value);
  results.value = n;
};
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

    <div class="mt-4">
      <input v-model="name" type="text" placeholder="Name" />
      <Button @click="handleGreet">Greet</Button>
    </div>
    <p>{{ results }}</p>
  </div>
</template>
