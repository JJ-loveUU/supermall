<template>
  <Swiper class="swiper-div">
    <SwiperItem v-for="item in topImages">
        <img :src="item" alt="" >
    </SwiperItem>
  </Swiper>
</template>

<script>


  import {Swiper, SwiperItem} from 'components/common/swiper/index.js'

  export default {
    name: "DetailSwiper",
    props:{
      topImages:{
        type:Array
      }
    },
    components:{
      Swiper,
      SwiperItem
    },
    created() {

    }
  }
</script>

<style scoped>
.swiper-div{
  height: 300px;
  overflow: hidden;
}
</style>