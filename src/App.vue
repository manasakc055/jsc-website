<template>
  <div id="app">
    <app-header />
    
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <!-- <language-switcher /> -->
    
    <app-footer />
  </div>
</template>

<script>
import AppHeader from './components/Layouts/AppHeader.vue';
import AppFooter from './components/Layouts/AppFooter.vue';
// @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');


// import LanguageSwitcher from './components/Layouts/LanguageSwitcher.vue';

export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter,
    // LanguageSwitcher,
  }
}
</script>

<style>
#app {
  font-family: "Roboto", sans-serif;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
