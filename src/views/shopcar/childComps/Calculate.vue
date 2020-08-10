<template>
  <div class="calculate">
    <div class="allcheck"><ItemCheck @click.native="allCheck" class="allcheckImg" :isChecked="isAllChecked"></ItemCheck><div style="float: left">全选</div></div>
    <div class="total">22</div>
    <div class="toCalac">33</div>
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
      }
    },
    methods:{
      allCheck(){
        this.$store.commit('checkAll',!this.isAllChecked);
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