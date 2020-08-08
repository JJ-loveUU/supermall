<template>
  <div id="app">

    <MainTab></MainTab>
    <keep-alive exclude="Detail"><router-view></router-view></keep-alive>
  </div>
</template>

<script>
  import MainTab from 'components/content/MainTab.vue'
export default {

  components: {
  name: 'App',
    MainTab
  }
}
</script>

<style>
@import "assets/css/base.css";
</style>
