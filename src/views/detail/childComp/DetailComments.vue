<template>
  <div class="detailComments">
    <div class="title">用户评价 <a href="javascript:void(0)" style="float: right" @click="getMore">更多</a> </div>
    <div class="comment" >
      <div class="user" v-if="detailComment.user"><img :src="detailComment.user.avatar" alt=""><span>{{detailComment.user.uname}}</span></div>
      <p class="comment">{{detailComment.content }}</p>
      <div class="date">{{formatDate+'  ' + detailComment.style}}</div>
      <div class="images">
        <img  v-for="(item,index ) in detailComment.images" :src="item" alt="">
      </div>

    </div>
  </div>
</template>

<script>
  import {formatDate} from 'common/utils.js'

  export default {
    name: "DetailComments",
    props:{
      detailComment:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    methods:{
      getMore(){
        console.log(1111);
      }
    },
    computed:{
      formatDate(){
        const date = new Date(this.detailComment.created*1000);
        return formatDate(date,'yyyy-MM-dd')
      }
    }
  }
</script>

<style scoped>

  .detailComments{
    padding: 10px 10px;
  }

  .title{
    border-bottom: 1px solid #ccc;
    padding: 10px 0px;
  }

  .user{
    margin-top: 20px;
  }

  .user img{
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  .user span{
    line-height: 40px;
    vertical-align: bottom;
    margin-left: 10px;
    font-weight: bold;
  }

  .comment{
    font-size: 14px;
    line-height: 20px;
  }

  .date{
    margin-top: 10px;
    font-size: 11px;
    color: #ccc;
  }

  .images img{
    width: 60px;
    height: 60px;
    margin-top: 20px;
    margin-left: 10px;
  }
</style>