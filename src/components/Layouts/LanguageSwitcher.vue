<template>
  <div class="language-switcher">
    <h1>{{ $t('welcome') }}</h1>
    <p>{{ $t('message') }}</p>

    <!-- Buttons to switch between English and Telugu -->
    <button @click="changeLanguage('te')" class="lang-btn te-btn">తెలుగు</button>
    <button @click="changeLanguage('en')" class="lang-btn en-btn">English</button>
  </div>
</template>

<script>
export default {
  methods: {
    changeLanguage(lang) {
      this.$i18n.locale = lang; // Change the locale dynamically
    }
  }
};
</script>

<style scoped>
.language-switcher {
  text-align: center;
  font-family: 'Poppins', sans-serif;
  margin: 20px;
}

.lang-btn {
  background-color: #317447;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  font-size: 16px;
}

.lang-btn:hover {
  background-color: #245a32;
}

.te-btn {
  background-color: #3498db;
}

.en-btn {
  background-color: #2ecc71;
}

.te-btn:hover {
  background-color: #2980b9;
}

.en-btn:hover {
  background-color: #27ae60;
}
</style>
