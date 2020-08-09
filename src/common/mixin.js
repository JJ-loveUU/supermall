import {debounce} from './utils'

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