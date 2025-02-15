<template>
  <div
    class="flex items-center p-2 hover:bg-gray-700 rounded-md cursor-pointer transition-all duration-300"
    :class="{ 'justify-center': !isOpen, 'gap-3': isOpen }"
  >
    <!-- Icon (Same height as text) -->
    <img
      :src="iconSrc"
      alt="icon"
      class="h-2 w-2 object-contain"
      :class="{ 'h-2 w-2': !isOpen, 'h-2 w-2': isOpen }"
    />

    <!-- Text (Same height as icon) -->
    <span v-if="isOpen" class="text-base leading-6">
      {{ text }}
    </span>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  icon: String, // e.g., "HomeIcon.png"
  text: String,
  isOpen: Boolean,
})

const iconSrc = computed(() => new URL(`../assets/${props.icon}`, import.meta.url).href)
</script>
