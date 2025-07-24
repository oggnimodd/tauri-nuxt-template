<script setup lang="ts">
import { useTest } from "@/pages/dashboard/composables/useTest";
useTest();
</script>

<template>
  <Header />
  <p class="text-blue-500">Hello world</p>
  <NuxtLink to="/">
    <Button>Back</Button>
  </NuxtLink>
</template>
