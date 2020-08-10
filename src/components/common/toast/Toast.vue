<template>
  <div class="toast" v-show="isshow">
    <div>{{message}}</div>
  </div>
</template>

<script>
  export default {
    name: "Toast",
    data(){
      return {
        message:'',
        isshow:false
      }
    },
    methods:{
      show(message,duration=2000){
        this.isshow=true;
        this.message=message;

        setTimeout(()=>{
          this.isshow=false;
          this.message='';
        },duration)
      }
    }
  }
</script>

<style scoped>


  .toast{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    z-index: 99;
    height: 50px;
    line-height:40px;
    text-align: center;
    background-color: rgba(0,0,0,0.75);
    color: #fff;
    padding: 5px 10px;

  }
</style>