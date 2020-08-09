<template>
  <div class="detail">
    <detailnavbar class="detailnavbar" :currentIndex="currentIndex" @changeType="changeNowType"></detailnavbar>
    <scroll :probeType="3" class="content" ref="scroll" @scroll="scroll">

      <detailswiper :topImages="topImages" ref="deailswiper"></detailswiper>
      <shopitemprice :goods="goods"></shopitemprice>
      <shopitem :shop="shop"></shopitem>
      <detailinfo :detailInfo="detailInfo" @detailImageLoad="detailImageLoad"></detailinfo>
      <DetailParamInfo :detailParamInfo="detailParamInfo" ref="deailparam"></DetailParamInfo>
      <DetailComments :detailComment="detailComment" ref="deailcomment"></DetailComments>
      <ProductsShow class="recommend"  :products="detailRecommend"  ref="deailrecommend"></ProductsShow>

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
  import {debounce} from 'common/utils'

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
      ProductsShow,

    },
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
        topoffsets:[0,0,0,0],
        getThemeTopY:null,
        itemImgListen:null,
        newRefresh:null
      }
    },
    methods: {
      changeNowType(value) {
        this.currentIndex = value;
        this.$refs.scroll.scrollTo(0,-this.topoffsets[value],0);
      },
      scroll(position){
        //console.log(position);
      },
      detailImageLoad(){
        this.newRefresh();
        this.getThemeTopY();
      }
    },
    //mixins:[itemListenMixin],
    created() {

      //请求数据
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

      this.getThemeTopY=debounce(()=>{
        const deailswiper= this.$refs.deailswiper.$el.offsetTop;
        const deailparam= this.$refs.deailparam.$el.offsetTop;
        const deailcomment= this.$refs.deailcomment.$el.offsetTop;
        const deailrecommend= this.$refs.deailrecommend.$el.offsetTop;
        this.topoffsets=[deailswiper,deailparam,deailcomment,deailrecommend];
        console.log(this.topoffsets)
      },100)


    },
    mounted(){
      this.newRefresh = debounce( this.$refs.scroll.refresh,0);
      this.itemImgListen=()=>{
        this.newRefresh() //这个方法的作用是重新计算高度，否则会出现无法滚动的bug
      };
      this.$bus.$on('itemImageLoad',this.itemImgListen);
    },
    destroyed() {
      this.$bus.$off('itemImageLoad',this.itemImgListen);
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
    position: relative;
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