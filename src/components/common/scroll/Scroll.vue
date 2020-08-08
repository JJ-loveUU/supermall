<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  //better在决定由多少区域可以滚动式模式根据scrollerheight属性决定的，scrollheight的高度是根据content的子组件高度决定的，
  //虽然图片的src已经拼接，但是由于网络的问题，你push方法结束后，img还没有记在完成，这个时候就会出现问题
  export default {
    name: "Scroll",
    props:{
      probeType:{
        type:Number,
        default:0
      }
    },
    data(){
      return {
        scroll:null
      }
    },
    mounted() {

      this.scroll=new BScroll(this.$refs.wrapper,{
        click: true,
        scrollY:true,
        probeType: this.probeType,
        pullUpLoad:true//开启上拉加载
      });
      //监听滚动事件
      this.scroll.on('scroll',(position,x,y)=>{
        this.$emit('scroll',position);
      })

      //监听上拉加载事件
      this.scroll.on('pullingUp',()=>{
        this.$emit('pullingUp')
      })

    },
    methods:{
      scrollTo(x,y,time=300){
        this.scroll && this.scroll.scrollTo(x,y,time);
      },
      finishPullUp(){//触发下拉加载后需要告诉scroll，否则只能执行一次下拉加载
        this.scroll && this.scroll.finishPullUp()
      },
      refresh(){
        this.scroll && this.scroll.refresh()
      },
      getScrollY(){
        return this.scroll ? this.scroll.y : 0
      }
    }
  }
</script>

<style scoped>

</style>