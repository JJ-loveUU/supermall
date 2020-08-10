<template>
  <div class="detailBottomBar">
    <div class="left">
      <div >
        <img  src="@/assets/imgs/detail/service.svg" alt="">
        <p>客服</p>
      </div>
      <div >
        <img  src="@/assets/imgs/detail/shop.svg" alt="">
        <p>店铺</p>
      </div>
      <div >
        <img  src="@/assets/imgs/detail/collect.svg" alt="">
        <p>收藏</p>
      </div>
    </div>
    <div class="right">
      <div class="insertCar" @click="addToShopCar">
        加入购物车
      </div>
      <div class="buy">
        购买
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailButtonBar",
    methods:{
      addToShopCar(){
        this.$emit('addToShopCar')
      }
    }
  }
</script>

<style scoped>
  .detailBottomBar{
    height: 60px;
    position: fixed;
    right: 0;
    left: 0;
    bottom: 0;
    display: flex;
  }

  .left,.right{
    flex: 1;
    display: flex;
  }
  .left{
    padding-top: 5px;
  }

  .left>div,.right>div{
    flex: 1;
    text-align: center;
  }


  .left p {
    font-size: 14px;
  }
  .left img{
    width: 25px;
    height: 25px;
  }


  .insertCar{
    line-height: 60px;
    color: #000;
    background-color: orange;
    font-size: 15px;
  }
  .buy{
    line-height: 60px;
    color: #fff;
    background-color: #f160a9;
    font-size: 15px;
  }
</style>