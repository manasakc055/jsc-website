<!-- Loading.vue -->
<template>
    <div class="loading-overlay" v-if="isLoading">
      <div class="spinner"></div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      isLoading: {
        type: Boolean,
        default: false
      }
    }
  }
  </script>
  
  <style scoped>
  .loading-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(10, 9, 9, 0.568);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999; /* Ensure it covers other content */
  }
  
  .spinner {
    border: 8px solid #f3f3f3; /* Light grey */
    border-top: 8px solid #317447; /* Blue */
    border-radius: 50%;
    width: 60px;
    height: 60px;
    animation: spin 2s linear infinite;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  </style>
  