<template>
  <tabbar>
    <tabbaritem path="/home" ><!-- 父组件向子组件传递一个固定值则不需要绑定了：-->
      <img src="@/assets/imgs/tarbar/home.svg" slot="imgSlot" alt="">
      <img src="@/assets/imgs/tarbar/home2.svg" slot="imgSlot-active" alt="">
      <div slot="textSlot">首页</div>
    </tabbaritem>
    <tabbaritem path="/category" >
      <img src="@/assets/imgs/tarbar/category1.svg" slot="imgSlot" alt="">
      <img src="@/assets/imgs/tarbar/category2.svg" slot="imgSlot-active" alt="">
      <div slot="textSlot">分类</div>
    </tabbaritem>
    <tabbaritem path="/shopcar" >
      <img src="@/assets/imgs/tarbar/shopcar1.svg" slot="imgSlot" alt="">
      <img src="@/assets/imgs/tarbar/shopcar2.svg" slot="imgSlot-active" alt="">
      <div slot="textSlot">购物车</div>
    </tabbaritem>
    <tabbaritem path="/mine" >
      <img src="@/assets/imgs/tarbar/mine1.svg" slot="imgSlot" alt="">
      <img src="@/assets/imgs/tarbar/mine2.svg" slot="imgSlot-active" alt="">
      <div slot="textSlot">我的</div>
    </tabbaritem>
  </tabbar>
</template>

<script>
    import tabbar from 'components/common/tabbar/TabBar'
    import tabbaritem from "components/common/tabbar/TabBarItem";
    export default {
        name: "MainTab",
        components:{
            tabbar,
            tabbaritem
        }
    }
</script>

<style scoped>

</style>
