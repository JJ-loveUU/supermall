<template>
  <div class="itemCheck">
    <img src="@/assets/imgs/cart/gou.svg" :class="{active:isChecked}"  alt="" >
  </div>
</template>

<script>
  export default {
    name: "ItemCheck",
    data(){
      return {
      }
    },
    props:{
      isChecked:{
        type:Boolean,
        default(){
          return false;
        }
      }
    }
  }
</script>

<style scoped>

  .active{
    background-color: var(--color-tint);
  }

  img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
</style>