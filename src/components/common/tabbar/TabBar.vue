<template>
  <div id="tabbar" class="ignore">
    <slot></slot>
  </div>
</template>

<script>

    export default {
        name: "tabbar"
    }
</script>

<style scoped>

  #tabbar{
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #ccc;
  }


</style>
