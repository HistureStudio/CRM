<template>
  <div id="app">
    <!-- The RouterView will display the current route view -->
    <RouterView />
  </div>
</template>

<script setup>
// You don’t need to import the layout directly here, as Vue Router handles it automatically
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
