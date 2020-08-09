import {debounce} from './utils'
import backtop from 'components/common/backTop/BackTop.vue'

//混入
export const itemListenMixin={
  data(){
    return {
      itemImgListen:null,
      newRefresh:null
    }
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
  },
  deactivated(){
    this.$bus.$off('itemImageLoad',this.itemImgListen);
  }
}


//混入backtop的图标，记得在scroll方法中，调用backtopListen(position)方法
export const backTopmix ={//混入的话，同一个方法是无法混入的，只有周期函数能够混入
  data(){
    return {
      isShowBackTop:  false,//是否显示backtop图标
    }
  },
  components:{
    backtop
  },
  methods:{
    clickBackTop(){
      //this.$refs.ref，如果ref是普通的元素，则获取的就是这个dom元素；如果ref在组件上，则直接获取的是组件，可以直接调用组件
      //上的属性和方法等等
      this.$refs.scroll.scrollTo(0,0)
    },
    backtopListen(position){
      this.isShowBackTop=-position.y>1000;
    }
  }
}