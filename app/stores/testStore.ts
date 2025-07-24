import { defineStore } from "pinia";

export const useTestStore = defineStore("test", () => {
  const count = ref(0);

  function increment() {
    count.value++;
  }

  const doubled = computed(() => count.value * 2);

  return { count, increment, doubled };
});
