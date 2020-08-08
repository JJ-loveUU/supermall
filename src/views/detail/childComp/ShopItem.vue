<template>
  <div class="shopItem">
    <div >
      <div class="log">
        <img  :src="shop.logo" alt=""> <span>{{shop.name}}</span>
      </div>
      <div class="shop-2">
        <div class="fans-count">
          <div class="fans">
            <div class="fans-num">{{sells}}万</div>
            <div class="fans-text">总销量</div>
          </div>
          <div class="count">
            <div class="count-num">{{shop.goodsCount}}</div>
            <div class="count-text">全家宝贝</div>
          </div>
        </div>
        <div class="scores" v-if="shop.score">
          <div style="display: flex" v-for="(item,index) in shop.score">
            <div class="scores-desc">{{item.name}}</div>
            <div  class="scores-score" :class="{'scores-num-isbetter':item.isBetter,'scores-num-nobetter':!item.isBetter}">{{item.score}}</div>
            <div  class="scores-better" ><span :class="{'scores-isbetter':item.isBetter,'scores-nobetter':!item.isBetter}">{{item.isBetter?'高':'低'}}</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ShopItem",
    props:{
      shop:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    computed:{
      sells(){
        return Number(this.shop.sells/10000).toFixed(1)
      }
    }
  }
</script>

<style scoped>

  .log img{
    width: 40px;
    height: 40px;
    margin-top: 20px;
    margin-left: 10px;
  }

  .log span{
    line-height: 40px;
    vertical-align: bottom;
  }

  .shop-2{
    display: flex;
    height: 100px;
    padding-right: 10px;
  }
  .shop-2>div{
    flex: 1;
  }

  .fans-count{
    display: flex;
  }

  .fans,.count{
    margin: 20px 0;
    flex: 1;
    text-align: center;
    vertical-align: center;
  }
  .count{
    border-right: 1px solid #ccc;
  }

  .fans>div{
    text-align: center;
  }

  .fans-num,.count-num{
    height: 30px;
    line-height: 30px;
    font-weight: bold;
  }

  .fans-text,.count-text{
    font-size: 12px;
  }

  .scores{
    font-size: 13px;
  }
  .scores > div{
    height: 33px;
    line-height: 33px;
  }

  .scores-desc{
    flex: 3;
    margin-left: 20px;
  }

  .scores-score{
    margin-left: 10px;
    flex: 1;
  }

  .scores-better{
    margin-left: 20px;
    flex: 1;

  }
  .scores-num-isbetter{
    color: orange;
  }
  .scores-num-nobetter{
    color: green;
  }
  .scores-isbetter{
    background-color: orange;
    color: white;
  }
  .scores-nobetter{
    background-color: green;
    color: white;
  }

</style>