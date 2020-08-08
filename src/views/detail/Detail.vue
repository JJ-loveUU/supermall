<template>
  <div>
    <detailnavbar :currentIndex="currentIndex" @changeType="changeNowType"></detailnavbar>
    <detailswiper :topImages="topImages"></detailswiper>
    <shopitemprice :goods="goods"></shopitemprice>
  </div>
</template>

<script>


  import detailnavbar from './childComp/DetailNavbar.vue'
  import detailswiper from './childComp/DetailSwiper.vue'
  import shopitemprice from './childComp/ShopItemPrice.vue'
  import {getDetail,Goods} from 'network/detail.js'

  export default {
    name: "Detail",
    components: {
      detailnavbar,
      detailswiper,
      shopitemprice,
    },
    data() {
      return {
        currentIndex: 0,
        topImages: [],
        goods:{}

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
      })
    }
  }
</script>

<style scoped>

</style>