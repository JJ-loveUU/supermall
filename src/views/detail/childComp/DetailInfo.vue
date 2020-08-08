<template>
  <div class="DetailInfo">
    <div class="detailDesc">{{detailInfo.desc}}</div>
    <div class="detailImages" v-if="detailInfo.detailImage">
      <div v-for="item in detailInfo.detailImage[0].list">
        <img :src="item" alt="" @load="loadImage">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailInfo",
    props:{
      detailInfo:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    methods:{
      loadImage(){
        this.$bus.$emit('imageLoad');
      }
    }
  }
</script>

<style scoped>
  .detailDesc{
    padding:  20px 10px;
  }

  .detailImages img{
    width: 100%;
    height: auto;
  }
</style>