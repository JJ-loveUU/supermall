import {debounce} from './utils'

export const itemListenMixin={
  data(){
    return {
      itemImgListen:null
    }
  },
  mounted(){
    const refresh = debounce( this.$refs.scroll.refresh,300);
    this.itemImgListen=()=>{
      refresh() //这个方法的作用是重新计算高度，否则会出现无法滚动的bug
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