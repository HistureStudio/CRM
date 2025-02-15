<template>
  <div class="flex">
    <!-- Sidebar -->
    <div
      class="h-screen bg-gray-900 text-white p-4 transition-all duration-300 flex flex-col items-center"
      :class="{ 'w-4': isOpen, 'w-2': !isOpen }"
    >
      <!-- Toggle Button -->
      <button @click="isOpen = !isOpen" class="mb-4 p-2 bg-gray-700 rounded-md w-full">
        {{ isOpen ? '<<' : '>>' }}
      </button>

      <!-- Navigation Items -->
      <nav class="flex flex-col gap-4 w-full">
        <NavItem icon="HomeIcon.png" text="首頁" :isOpen="isOpen" />
        <NavItem icon="ProjectIcon.png" text="客戶資料模板" :isOpen="isOpen" />
        <NavItem icon="ServiceIcon.png" text="服務流程模板" :isOpen="isOpen" />
        <NavItem icon="TracingIcon.png" text="業務專案追蹤" :isOpen="isOpen" />
        <NavItem icon="EmployeeIcon.png" text="員工管理" :isOpen="isOpen" />
      </nav>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import NavItem from './NavItem.vue'

const isOpen = ref(false)
</script>
