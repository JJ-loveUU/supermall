<template>
  <div class="cartList">
    <CartListItem v-for="(item,index) in cartList" :cart-list-item="item"></CartListItem>
  </div>


</template>

<script>

  import CartListItem  from './CartListItem.vue'

  export default {
    name: "CartList",
    props:{
      cartList:{
        type:Array,
        default(){
          return []
        }
      }
    },
    components:{
      CartListItem
    }
  }
</script>

<style scoped>

</style>