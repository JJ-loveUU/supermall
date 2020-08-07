<template>
  <div>
    <div class="future-view">
      <a href="https://act.mogujie.com/zzlx67">
        <img src="@/assets/imgs/home/recommend_bg.jpg" alt="" @load="imageLoad">
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "FutureView",
    methods:{
      imageLoad(){
        this.$emit('calcOffsetTop')
      }
    }
  }
</script>

<style scoped>
  .future-view{
    margin-top: 10px;
    border-top: 10px solid #f1ecec;
  }
  .future-view a img{
    width: 100%;
    height: 100%;
  }

</style>