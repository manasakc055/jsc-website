
<template>
  <div id="App">

  <app-header />
    
    <router-view ></router-view> 
      <!-- <transition name="fade" mode="out-in">
        <component :is="Component"></component>
      </transition> -->
    <app-footer />
  </div>

</template>

<script>
 import AppHeader from './components/Layouts/AppHeader.vue';
 import AppFooter from './components/Layouts/AppFooter.vue';



export default{
  name:"App",
    components:{
       AppHeader,
       AppFooter,
  }
}

</script>
<style lang="css">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to{
  opacity: 0;
}
/* #app{
  font-family: "Lato", sans-serif;

  font-family: "Lora", serif; 
} */

</style>
