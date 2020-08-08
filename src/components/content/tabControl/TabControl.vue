<template>
  <div class="tab-control">
    <div v-for="(item,index) in texts" :class="{active:currentIndex==index}" @click="clickText(index)"><span>{{item}}</span></div>

  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props:{
      texts:{
        type:Array,
        default(){
          return []
        },

      },
      currentIndex:{
        type:Number
      }
    },
    methods:{
      clickText(index){
        this.$emit('changeType',index)
      }
    }
  }
</script>

<style scoped>

  .tab-control{
    /*position: sticky;*/
    background-color: #fff;
    height: 30px;
    line-height: 30px;

    display: flex;
    padding-top: 5px;
    z-index: 9;
  }
  .tab-control div{
    flex: 1;
    text-align: center;
  }

  .active{
    color:  var(--color-tint);
  }
  .active span{
    border-bottom: 2px solid var(--color-tint);
    padding: 2px 4px 2px;
  }

</style>