<template>
  <div>
    <detailnavbar :currentIndex="currentIndex" @changeType="changeNowType"></detailnavbar>
    <detailswiper :topImages="topImages"></detailswiper>
    <shopitemprice></shopitemprice>
  </div>
</template>

<script>


  import detailnavbar from './childComp/DetailNavbar.vue'
  import detailswiper from './childComp/DetailSwiper.vue'
  import shopitemprice from './childComp/ShopItemPrice.vue'
  import {getDetail} from 'network/detail.js'

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
        topImages: []
      }
    },
    methods: {
      changeNowType(value) {
        this.currentIndex = value;
      }
    },
    created() {
      getDetail(this.$route.params.iid).then((res) => {
        this.topImages = res.result.itemInfo.topImages;
      })
    }
  }
</script>

<style scoped>

</style>