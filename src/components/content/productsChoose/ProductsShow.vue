<template>
  <div class="products-show">
    <productitems v-for="item in products" :product="item"></productitems>
  </div>
</template>

<script>
  import productitems from 'components/content/productsChoose/ProductsItem.vue'
  export default {
    name: "ProductsShow",
    props: {
      products:{
        type:Array,
        default(){
          return []
        }
      }
    },
    components:{
      productitems
    }
  }
</script>

<style scoped>

  .products-show{
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }





</style>