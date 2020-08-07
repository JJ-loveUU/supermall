import axios from 'axios'

export function request(config){
  //创建一个实例
  const instance =axios.create({
    baseURL:'http://152.136.185.210:8000/api/z8',
    timeout:'5000'
  })

  //2.axios拦截器，请求拦截
  instance.interceptors.request.use(config=>{
    //可以进行一些验证和添加一些额外的信息
    //console.log(config);
    return config
  },error => {
    //console.log(error);
  })

  //3响应拦截,对返回的数据进行处理
  instance.interceptors.response.use(res=>{
    //console.log(res);
    return res.data;//返回数据
  },error => {
    //console.log(error);
  })


  return instance(config)

}
