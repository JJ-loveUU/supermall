<template>
  <div class="homeSwiper">
    <Swiper>
      <SwiperItem v-for="item in banner">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="imageLoad">
        </a>
      </SwiperItem>
    </Swiper>
  </div>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper/index.js'
  export default {
    name: "HomeSwiper",
    components:{
      Swiper,
      SwiperItem
    },
    props:{
      banner:{
        type:Array,
        default(){
          return []
        }
      }
    },
    methods:{
      imageLoad(){
        this.$emit('calcOffsetTop')
      }
    }
  }
</script>

<style scoped>
  #hy-swiper{
    margin-top: 44px;
  }
</style>