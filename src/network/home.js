import {request} from './request.js'

export function getHomeMultiData() {
  return request({
    url:'/home/multidata'
  })
}

export function getProducts(config){
  return request(config)
}