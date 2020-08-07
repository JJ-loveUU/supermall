<template>
  <div id="app">

    <MainTab></MainTab>
    <router-view></router-view>
  </div>
</template>

<script>
  import MainTab from 'components/content/MainTab.vue'
export default {

  name: 'App',
  components: {
    MainTab
  }
}
</script>

<style>
@import "assets/css/base.css";
</style>
