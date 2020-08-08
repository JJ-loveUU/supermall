<template>
  <div class="detailParamInfo">
    <table border="1" cellpadding="0" cellspacing="0" class="paramInfoSize" v-for="(item ,index) in detailParamInfo.sizes">
      <tr v-for="(tr,trIndex) in item">
        <td v-for="(td,tdIndex) in tr">{{td}}</td>
      </tr>
    </table>
    <table border="1" cellpadding="0" cellspacing="0">
      <tr v-for="(item,index) in detailParamInfo.infos">
        <td>{{item.key}}</td>
        <td>{{item.value}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    name: "DetailParamInfo",
    props:{
      detailParamInfo:{
        type:Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style scoped>

  table {
    width: 100%;
    padding: 10px;
    border: 0px;
  }
</style>