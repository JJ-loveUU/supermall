<template>
  <div class="detail">
    <scroll :probeType="3" class="content" ref="scroll">
      <detailnavbar :currentIndex="currentIndex" @changeType="changeNowType"></detailnavbar>
      <detailswiper :topImages="topImages"></detailswiper>
      <shopitemprice :goods="goods"></shopitemprice>
      <shopitem :shop="shop"></shopitem>
      <detailinfo :detailInfo="detailInfo"></detailinfo>
      <DetailParamInfo :detailParamInfo="detailParamInfo"></DetailParamInfo>
    </scroll>

  </div>
</template>

<script>


  import scroll  from 'components/common/scroll/Scroll.vue'
  import detailnavbar from './childComp/DetailNavbar.vue'
  import detailswiper from './childComp/DetailSwiper.vue'
  import shopitemprice from './childComp/ShopItemPrice.vue'
  import shopitem from './childComp/ShopItem.vue'
  import detailinfo from './childComp/DetailInfo.vue'
  import DetailParamInfo from './childComp/DetailParamInfo.vue'
  import {getDetail,Goods,Shop,GoodsParam} from 'network/detail.js'
  import {debounce} from 'common/utils.js'

  export default {
    name: "Detail",
    components: {
      detailnavbar,
      detailswiper,
      shopitemprice,
      shopitem,
      scroll,
      detailinfo,
      DetailParamInfo

    },
    data() {
      return {
        currentIndex: 0,
        topImages: [],
        goods:{},
        shop:{},
        detailInfo:{},
        detailParamInfo:{}
      }
    },
    mounted(){
      const refresh = debounce( this.$refs.scroll.refresh,300);
      this.$bus.$on('imageLoad',()=>{
        refresh() //这个方法的作用是重新计算高度，否则会出现无法滚动的bug
      })
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
        this.detailInfo=data.detailInfo;
        this.detailParamInfo=new GoodsParam(data.itemParams.info,data.itemParams.rule);

      })
    }
  }
</script>

<style scoped>
.detail{
  overflow: hidden;
  height: 100vh;
  position: relative;
  z-index: 9;
  background-color: #fff;
}

  .content{
    height: 100%;
    overflow: hidden;
  }
</style>