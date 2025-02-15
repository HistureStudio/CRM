<template>
  <div class="login-text-bar">
    <slot>會員登入</slot>
  </div>
</template>

<script setup></script>

<style scoped>
.login-text-bar {
  width: 100%;
  background-color: #ffd99b;
  color: #000000;
  border: none;
  border-radius: 8px;
  padding: 12px 16px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
}
</style>
