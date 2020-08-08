<template>
  <div class="detail">
    <detailnavbar class="detailnavbar" :currentIndex="currentIndex" @changeType="changeNowType"></detailnavbar>
    <scroll :probeType="3" class="content" ref="scroll">

      <detailswiper :topImages="topImages"></detailswiper>
      <shopitemprice :goods="goods"></shopitemprice>
      <shopitem :shop="shop"></shopitem>
      <detailinfo :detailInfo="detailInfo"></detailinfo>
      <DetailParamInfo :detailParamInfo="detailParamInfo"></DetailParamInfo>
      <DetailComments :detailComment="detailComment"></DetailComments>
      <ProductsShow class="recommend"  :products="detailRecommend"></ProductsShow>

    </scroll>

  </div>
</template>

<script>


  import scroll  from 'components/common/scroll/Scroll.vue'
  import ProductsShow  from 'components/content/productsChoose/ProductsShow.vue'
  import detailnavbar from './childComp/DetailNavbar.vue'
  import detailswiper from './childComp/DetailSwiper.vue'
  import shopitemprice from './childComp/ShopItemPrice.vue'
  import shopitem from './childComp/ShopItem.vue'
  import detailinfo from './childComp/DetailInfo.vue'
  import DetailParamInfo from './childComp/DetailParamInfo.vue'
  import DetailComments from './childComp/DetailComments.vue'
  import {getDetail,getDetailRecommend,Goods,Shop,GoodsParam} from 'network/detail.js'
  import {itemListenMixin} from 'common/mixin.js'

  export default {
    name: "Detail",
    components: {
      detailnavbar,
      detailswiper,
      shopitemprice,
      shopitem,
      scroll,
      detailinfo,
      DetailParamInfo,
      DetailComments,
      ProductsShow
    },
    mixins:[itemListenMixin],
    data() {
      return {
        currentIndex: 0,
        topImages: [],
        goods:{},
        shop:{},
        detailInfo:{},
        detailParamInfo:{},
        detailComment:{},
        detailRecommend:[],
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
        this.detailInfo=data.detailInfo;
        this.detailParamInfo=new GoodsParam(data.itemParams.info,data.itemParams.rule);
        if(data.rate.cRate>0)this.detailComment=data.rate.list[0];
      });
      getDetailRecommend().then((res)=>{
        this.detailRecommend=res.data.list;
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
    height: calc(100% - 30px);
    overflow: hidden;
    margin-top: 30px;

  }

  .recommend{
    border-top: 1px solid #ccc;
    padding-top: 10px;
  }

  .detailnavbar{
    position: fixed;
    left: 0;
    right: 0;
  }
</style>