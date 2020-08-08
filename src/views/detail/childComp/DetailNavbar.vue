<template>
  <div class="detail-nav" >
    <div @click="goback"><img src="@/assets/imgs/detail/left.svg" alt=""></div>
    <div v-for="(item,index) in ['商品','参数','评论','推荐']" :class="{active:currentIndex==index}" @click="clickText(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>


  export default {
    name: "DetailNavbar",
    data(){
      return {
        currentIndex:0
      }
    },
    components:{

    },
    methods:{
      clickText(index){
        this.currentIndex=index;
      },
      goback(){
        this.$router.go(-1);
      }
    }
  }
</script>

<style scoped>

  .detail-nav{
    background-color: #fff;
    height: 30px;
    line-height: 30px;

    display: flex;
    z-index: 9;
    border-bottom: 1px solid #ccc;
  }
  .detail-nav>div{
    font-size: 15px;
    flex: 1;
    text-align: center;
  }

  .detail-nav img{
    width: 24px;
    height: 24px;
    margin-top: 2px;
  }

  .active{
    color:  var(--color-tint);
  }
  .active span{
    padding: 2px 4px 2px;
  }
</style>