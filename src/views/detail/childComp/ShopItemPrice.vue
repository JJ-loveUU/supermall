<template>
  <div class="shipItemPrice">
    <div class="description">秋装女2018款反反复复付付付付付付付付付付付付付付反反复复付付付付付付付</div>
    <div class="price">
      <div class="newPrice"><span >￥</span><span >109.00</span></div>
      <div class="oldPrice"><span >￥</span><span >123.00</span></div>
      <span class="sepcPrice">今日特价</span>
    </div>
    <div class="sell-star">
      <div class="sell">销量4173</div>
      <div class="star">收藏167人</div>
      <div class="service1">72小时发货</div>
    </div>
    <div class="services">
      <div>退货补运费</div>
      <div>全国包邮</div>
      <div>7天无理由包退</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ShopItemPrice"
  }
</script>

<style scoped>

  .shipItemPrice{
    padding: 0 10px;
  }

  .description{
    padding: 10px 0;
    font-weight: 700;
  }

  .price div{
    float: left;
  }

  .newPrice{
    color: var(--color-tint);
    font-size: 18px;
  }

  .oldPrice{
    color:  #ccc;
    text-decoration:line-through;
    font-size: 10px;
    margin-left: 5px;
    margin-top: 5px;
  }

  .sepcPrice{
    margin-left: 5px;
    color: #fff;
    background-color: var(--color-high-text);
    border-radius: 8px;
    padding: 1px;
  }

  .sell-star{
    margin-top: 20px;
    display: flex;
  }

  .sell-star div{
    flex: 1;
    color:#ccc;
    font-size: 13px;
  }

  .star{
    text-align: center;
  }

  .service1{
    text-align: right;
  }


</style>