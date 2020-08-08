<template>
  <div class="detail">
    <detailnavbar :currentIndex="currentIndex" @changeType="changeNowType"></detailnavbar>
    <detailswiper :topImages="topImages"></detailswiper>
    <shopitemprice :goods="goods"></shopitemprice>
    <shopitem :shop="shop"></shopitem>
  </div>
</template>

<script>


  import detailnavbar from './childComp/DetailNavbar.vue'
  import detailswiper from './childComp/DetailSwiper.vue'
  import shopitemprice from './childComp/ShopItemPrice.vue'
  import shopitem from './childComp/ShopItem.vue'
  import {getDetail,Goods,Shop} from 'network/detail.js'

  export default {
    name: "Detail",
    components: {
      detailnavbar,
      detailswiper,
      shopitemprice,
      shopitem
    },
    data() {
      return {
        currentIndex: 0,
        topImages: [],
        goods:{},
        shop:{}
      }
    },
    methods: {
      changeNowType(value) {
        this.currentIndex = value;
      }
    },
    created() {
      getDetail(this.$route.params.iid).then((res) => {
        const data= res.result;
        this.topImages = data.itemInfo.topImages;
        this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services);
        this.shop=new Shop(data.shopInfo);
      })
    }
  }
</script>

<style scoped>
.detail{
  height: calc(100vh - 49px);
  overflow: auto;
}
</style>