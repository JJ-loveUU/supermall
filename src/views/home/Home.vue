<template>
  <div id="home">

    <navbar class="home-nav">
      <div slot="center">购物街</div>
    </navbar>
    <tabcontrol class="fixTabControl" :texts="types" :currentIndex="currentIndex" @changeType="changeNowType"  v-show="isShowTabbar"></tabcontrol>
    <scroll ref="scroll" :probeType="3" class="content" @scroll="scroll" @pullingUp="loadMore">
      <homeswiper :banner="banner" @calcOffsetTop="calcOffsetTop"></homeswiper>
      <recommend :recommend="recommend" @calcOffsetTop="calcOffsetTop"></recommend>
      <futureview @calcOffsetTop="calcOffsetTop"></futureview>
      <tabcontrol :texts="types" @changeType="changeNowType" :currentIndex="currentIndex" ref="tabC"></tabcontrol>
      <productsshow :products="goods[currenttype].list" ></productsshow>
    </scroll>
    <backtop @click.native="clickBackTop" v-show="isShowBackTop" ></backtop><!--不加native在组件上的这个方法不生效-->
  </div>
</template>

<script>
  import navbar from 'components/common/navBar/NavBar.vue'
  import scroll from 'components/common/scroll/Scroll.vue'
  import homeswiper from 'views/home/childComps/HomeSwiper.vue'
  import recommend from 'views/home/childComps/Recommend.vue'
  import futureview from 'views/home/childComps/FutureView.vue'
  import tabcontrol from 'components/content/tabControl/TabControl.vue'
  import productsshow from 'components/content/productsChoose/ProductsShow.vue'


  import {backTopmix} from 'common/mixin.js'
  import {getHomeMultiData} from 'network/home.js'
  import {getProducts} from 'network/home.js'
  import {debounce} from 'common/utils'


  export default {
    name: "Home",
    components:{
      navbar,
      homeswiper,
      recommend,
      futureview,
      tabcontrol,
      productsshow,
      scroll
    },
    mixins:[backTopmix],
    data(){
      return {
        banner:[],
        recommend:[],
        goods:{
          'pop':{page:0,list:[]},
          'new':{page:0,list:[]},
          'sell':{page:0,list:[]}
        },
        currenttype:'pop',
        currentIndex:0,
        types:['流行','新款','精选'],
        types_eg:['pop','new','sell'],
        tabControlOffsetTop:0,//tabcontroll的offsettop
        isShowTabbar:false, //是否显示tab_control
        saveY:0, //记录离开这个组件时scroll的位置
        itemImgListen:null,
        newRefresh:null
      }
    },
    created() {
      this.MgetHomeMultiData();

      //获取products
      this.MgetProducts('pop');
      this.MgetProducts('new');
      this.MgetProducts('sell');
    },
    mounted(){
      this.newRefresh = debounce( this.$refs.scroll.refresh,0);
      this.itemImgListen=()=>{
        this.newRefresh() //这个方法的作用是重新计算高度，否则会出现无法滚动的bug
      };
      this.$bus.$on('itemImageLoad',this.itemImgListen);
    },
    activated(){
      this.$refs.scroll.refresh();//刷新一下，否则会有问题
      this.$refs.scroll.scrollTo(0,this.saveY,0);//keep-alive滚动到之前的位置
      this.$refs.scroll.refresh();//刷新一下，否则会有问题
    },
    deactivated(){
      this.saveY=this.$refs.scroll.getScrollY();
      this.$bus.$off('itemImageLoad',this.itemImgListen);
    },
    methods:{
      MgetProducts(type){
        getProducts({
          url:'/home/data',
          params:{
            type:type,
            page:this.goods[type].page+1
          }
        }).then(res=>{
          this.goods[type].page=this.goods[type].page+1;
          this.goods[type].list.push(...res.data.list);//加返回的结果加入到原数组

        })
      },
      MgetHomeMultiData(){
        getHomeMultiData().then(res=>{
          this.banner=res.data.banner.list;
          this.recommend=res.data.recommend.list;
        })
      },
      changeNowType(value){
        this.currenttype=this.types_eg[value];
        this.currentIndex=value;
      },
      scroll(position){
        this.isShowTabbar=-position.y>=this.tabControlOffsetTop;
        //判断是否显示backtop图标
        this.backtopListen(position);
      },
      loadMore(){
        this.MgetProducts(this.currenttype);
        this.$refs.scroll.finishPullUp();//重置一下pullup
      },
      calcOffsetTop(){
        //計算tabcontrol的offsettop的值
        this.$refs.scroll.refresh();
        this.tabControlOffsetTop=this.$refs.tabC.$el.offsetTop;
      }

    },
    destroyed() {
      this.$bus.$off('itemImageLoad',this.itemImgListen);
    }
  }
</script>

<style scoped>

  #home{
    height: 100vh;/*视口高度的100%*/
  }

  .home-nav{
    background-color: var(--color-tint);
    color: white;
    position: fixed;
    width: 100%;
    z-index: 9;
    top:0;
  }


  .content{
    /*margin-top: 44px;
    height: calc(100vh - 93px);*/
    left: 0;
    right: 0;
    top: 44px;
    bottom: 49px;
    position: absolute;
    overflow: hidden;
  }

  .fixTabControl{
    position: relative;
    left: 0px;
    right: 0px;
    top: 44px;
  }


</style>
