<template>
  <div class="layout">
    <main class="content">
      <LoginView />
    </main>
  </div>
</template>

<script setup>
/*import SideBar from '@/components/SideBar.vue'*/
import LoginView from '@/views/LoginView.vue'
</script>

<style scoped>
.layout {
  display: flex;
  height: 100vh;
}

/* Sidebar is always fixed to the left */
/*
.sidebar {
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  transition: width 0.3s ease-in-out;
}
*/

/* Main content should not have a fixed margin */
.content {
  flex-grow: 1;
  padding: 20px;
  transition: margin-left 0.3s ease-in-out;
}
</style>
