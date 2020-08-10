<template>
  <div class="cartListItem">
    <div class="check"><ItemCheck @click.native="checkCart" class="checkImg" :isChecked="cartListItem.isChecked"></ItemCheck></div>
    <div class="itemImg"><img :src="cartListItem.imgURL" alt=""></div>
    <div class="itemInfo">
      <p class="title">{{cartListItem.title}}</p>
      <p class="desc">{{cartListItem.desc}}</p>
      <div class="price-count">
        <div class="price">￥{{cartListItem.newPrice}}</div>
        <div class="count">×{{cartListItem.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>

  import ItemCheck from 'components/content/check/ItemCheck.vue'
  export default {
    name: "CartListItem",
    props: {
      cartListItem: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    components:{
      ItemCheck
    },
    methods:{
      checkCart(){
        this.$store.commit('checkCart',this.cartListItem.iid)
      }
    }
  }
</script>

<style scoped>

  .cartListItem {
    display: flex;
    height: 110px;
    border-bottom: 1px solid #ccc;
  }

  .check {
    flex: 1;
    text-align: center;
  }
  .check .checkImg{
    width: 20px;
    line-height: 110px;
    height:20px;
    display: inline-block;
  }

  .itemImg {
    flex: 2.5;
  }

  .itemImg img {
    height: 80%;
    width: 100%;
    margin-top: 11px;
    border-radius: 3px;
  }

  .itemInfo {
    flex: 7;
    padding: 11px;
    overflow: hidden;
  }

  .price-count {
    display: flex;
    margin-top: 25px;
  }

  .price {
    flex: 8;
    text-align: left;
    color: orange;
  }

  .count {
    flex: 2;
    text-align: right;
  }

  .title, .desc {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;

  }

  .desc{
    font-size: 13px;
    color: #aaa;
    margin-top: 8px;
  }
</style>