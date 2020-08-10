<template>
  <div class="calculate">
    <div class="allcheck"><ItemCheck @click.native="allCheck" class="allcheckImg" :isChecked="isAllChecked"></ItemCheck><div style="float: left">全选</div></div>
    <div class="total">合计: ￥{{totalPrice}}</div>
    <div class="toCalac" @click="clcc">去计算({{totalCheckedCount}})</div>
  </div>
</template>

<script>
  import ItemCheck from '@/components/content/check/ItemCheck.vue'
  export default {
    name: "Calculate",
    components:{
      ItemCheck
    },
    computed:{
      isAllChecked(){
        const products =this.$store.state.products;
        if(products.length==0)return;
        //查找被选中的product
        const checked = products.filter((item)=>item.isChecked);
        return checked.length==products.length;
      },
      totalPrice(){
        const checkedProducts =this.$store.state.products.filter(item=>item.isChecked);
        if (checkedProducts.length==0) return 0.00;
        return Number(checkedProducts.reduce((previousValue, currentValue) => {
          return previousValue+currentValue.count*currentValue.newPrice;
        },1)).toFixed(2)
      },
      totalCheckedCount(){
        const checkedProducts =this.$store.state.products.filter(item=>item.isChecked);
        if (checkedProducts.length==0) return 0;
        return checkedProducts.reduce((previousValue, currentValue) => {
          return previousValue+currentValue.count
        },0);
      }
    },
    methods:{
      allCheck(){
        this.$store.commit('checkAll',!this.isAllChecked);
      },
      clcc(){
        if (this.totalCheckedCount==0){
          this.$toast.show('请选择商品');
        }
      }
    }
  }
</script>

<style scoped>
  .calculate{
    display: flex;
    align-items: center;
    height: 38px;
    left: 0;
    right: 0;
    background-color: #eee;

  }

  .calculate>div{
    height: 25px;
    line-height: 25px;
  }


  .total{
    flex: 4;
    text-align: left;
  }
  .toCalac{
    flex: 3;
    text-align: center;
    height: 38px!important;
    line-height: 38px!important;
    background-color: red;
    color: #fff;
    font-size: 14px;
  }

  .allcheck{
    flex: 3;
    text-align: center;
    line-height: 25px;
  }

  .allcheck .allcheckImg{
    float: left;
    width: 20px;
    height:20px;
    display: inline-block;
    margin-top: 3px;
    margin-left: 10px;

  }
</style>