<template>
    <div id="tabbaritem" class="tabbar-item" @click="clickTarbarItem">
      <div v-if="!isActive"><slot name="imgSlot"></slot></div>
      <div v-else><slot name="imgSlot-active"></slot></div>
      <div :style="cpactiveColor"><slot name="textSlot" ></slot></div>


    </div>
</template>

<script>
    export default {
        name: "tabbaritem",
        props:{
            path:{
                type:String
            },
            activeColor:{
                type: String,
                default:'#d81e06'
            }
        },
        methods:{
            clickTarbarItem(){
                this.$router.push(this.path)
            }
        },
        computed:{
            isActive(){
                return this.$route.path.indexOf(this.path)!=-1//判断当前活跃的route是否包含当前path
            },
            cpactiveColor(){
                return this.isActive?{color:this.activeColor}:{}
            }
        }
    }
</script>

<style scoped>
  .tabbar-item{
    height: 49px;
    flex: 1;
    text-align: center;
  }
  .tabbar-item img{
    margin-top: 3px;
    width: 24px;
    height: 24px;
    vertical-align: middle;
  }

  .active{
    color:#d81e06;
  }
</style>
