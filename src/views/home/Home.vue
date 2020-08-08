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
  import backtop from 'components/common/backTop/BackTop.vue'
  import homeswiper from 'views/home/childComps/HomeSwiper.vue'
  import recommend from 'views/home/childComps/Recommend.vue'
  import futureview from 'views/home/childComps/FutureView.vue'
  import tabcontrol from 'components/content/tabControl/TabControl.vue'
  import productsshow from 'components/content/productsChoose/ProductsShow.vue'
  import {itemListenMixin} from 'common/mixin.js'
  import {getHomeMultiData} from 'network/home.js'
  import {getProducts} from 'network/home.js'

  export default {
    name: "Home",
    components:{
      navbar,
      homeswiper,
      recommend,
      futureview,
      tabcontrol,
      productsshow,
      scroll,
      backtop
    },
    mixins:[itemListenMixin],
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
        isShowBackTop:  false,//是否显示backtop图标
        tabControlOffsetTop:0,//tabcontroll的offsettop
        isShowTabbar:false, //是否显示tab_control
        saveY:0 //记录离开这个组件时scroll的位置
      }
    },
    created() {
      this.MgetHomeMultiData();

      //获取products
      this.MgetProducts('pop');
      this.MgetProducts('new');
      this.MgetProducts('sell');
    },
    activated(){
      this.$refs.scroll.refresh();//刷新一下，否则会有问题
      this.$refs.scroll.scrollTo(0,this.saveY,0);//keep-alive滚动到之前的位置
    },
    deactivated(){
      this.saveY=this.$refs.scroll.getScrollY();
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
      clickBackTop(){
        //this.$refs.ref，如果ref是普通的元素，则获取的就是这个dom元素；如果ref在组件上，则直接获取的是组件，可以直接调用组件
        //上的属性和方法等等
        this.$refs.scroll.scrollTo(0,0)
      },
      scroll(position){
        this.isShowBackTop=-position.y>1000;
        this.isShowTabbar=-position.y>=this.tabControlOffsetTop;
      },
      loadMore(){
        this.MgetProducts(this.currenttype);
        this.$refs.scroll.finishPullUp();//重置一下pullup
      },
      calcOffsetTop(){
        //計算tabcontrol的offsettop的值
        this.tabControlOffsetTop=this.$refs.tabC.$el.offsetTop;
      }

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
