<template>
  <div class="recommend">
    <div class="recommend-item" v-for="item in recommend">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imageLoad">
        <p>{{item.title}}</p>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Recommend",
    data(){
      return {
        isLoad:false
      }
    },
    props:{
      recommend:{
        type:Array,
        default(){
          return []
        }
      }
    },
    methods:{
      imageLoad(){
        if(!this.isLoad){
          this.$emit('calcOffsetTop');
          this.isLoad=true;
        }
      }
    }
  }
</script>

<style scoped>
.recommend{
  display: flex;
}
.recommend .recommend-item{
  text-align: center;
  width: 80px;
}
.recommend .recommend-item img{
  width: 100%;
  height: 80px;
}
</style>