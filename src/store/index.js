import Vue from 'vue'
import Vuex from 'vuex'


//安装插件
Vue.use(Vuex);


//创建对象
 const store =new Vuex.Store({
   state:{
     products:[]
   },
   mutations:{

     checkCart(state,iid){
       const oldProduct = state.products.find(item=>item.iid===iid);
       oldProduct.isChecked=!oldProduct.isChecked;
     },
     checkAll(state,changeCheck){
       state.products.map(item=>item.isChecked=changeCheck);
     },


     decrement(state){
       state.counter--;
     },
     addCount(state,count){
       state.counter+=count;
     },
     addUser(state,stu){
       state.students.push(stu);
     },
     addCount2(state,plyload){
       state.counter+=plyload.count;
     },
     changeInfo(state){
       //state.info['a']='a'; state中存在该属性的时候修改才能产生产生响应模式，新增或者删除是无法响应式的
       Vue.set(state.info,'address','beijing')
       Vue.delete(state.info,'name')
     },
     updateInfo(state,payload){
       Vue.set(state.info,'address',payload.address)

     }


   },
   actions:{//异步操作走这个方法，否则vue插件vuedevtools追踪不到,有一些复杂的逻辑也可以走这个方法
     //通过传参来处理异步回调
      /*updateInfo(context,payload){//context理解为store对象即可
        setTimeout(()=>{
          context.commit('updateInfo',payload);
          payload.f();
        },3000)
      }*/
     //通过promise来处理异步回调
      updateInfo(context,payload){//context理解为store对象即可
        return new Promise((resolve => {
          setTimeout(()=>{
            context.commit('updateInfo',payload);
            resolve('11111111')
          },3000)
        }))
      },

     addProduct(context,stu){
       return new Promise(((resolve, reject) => {
         const oldProduct = context.state.products.find(item=>item.iid===stu.iid);
         if (oldProduct){
           oldProduct.count++;
           resolve('商品数量加1')
         }else{
           stu.count=1;
           context.state.products.push(stu);
           resolve('添加商品成功')
         }
       }))
     },
   },
   getters:{
     cartLength(state){
       return state.products.length;
     },
     cartList(state){
       return state.products;
     }

      /* powerCounter(state){
           return state.counter*state.counter;
       },
       more20stu(state){
           return state.students.filter(s=>s.age>20);
       },
       more20stuLength(state,getters){
           return getters.more20stu.length;
       },
       moreAgeStu(state){
           return function(age){
               return state.students.filter(s=>s.age>age)
           }
       }*/
   },
   modules:{

   }
 })

export default store
