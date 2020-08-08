<template>
  <div class="product-item">
    <a href="javascript:void(0)" @click.stop="clickImage">
      <img :src="getImage" alt="" @load="imageLoad">
      <p class="info">{{product.title}}</p>
      <p class="price-star"><span class="price">{{product.price}}</span><span class="star"><img src="@/assets/imgs/products/star.svg" alt="">{{product.cfav}}</span></p>
    </a>
  </div>
</template>

<script>
  export default {
    name: "ProductsItem",
    props: {
      product:{
        type:Object,
        default(){
          return {}
        }
      }

    },
    methods:{
      imageLoad(){//图片加载完成事件，类比于window.onload事件(请求加载成图片)
        //这里使用事件总线发送一个事件，没加载完成一个图片，就用事件总线发射事件，我们在home中监听
        //这里不直接用$emit发发送给父节点的原因是要发射两次
        this.$bus.$emit('itemImageLoad');
      },
      clickImage(){
        this.$router.push('/detail/'+this.product.iid);
      }
    },
    mounted() {
    },
    computed:{
      getImage(){
        let img ='';
        if(this.product.show) {
          img=this.product.show.img;
        }else if (this.product.image){
          img=this.product.image;
        }
        return img;
      }
    }
  }
</script>

<style scoped>

  .product-item{
    width: 45%;
  }

  .product-item>a>img{
    width: 100%;
    height: auto;
  }

  .price-star,.info{
    text-align: center;
  }

  .info{
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }


  .price{
    color:var(--color-tint);
  }

  .star{
    display:inline-block;

  }

  .star img{
    width: 16px;
    height: 16px;

  }
</style>