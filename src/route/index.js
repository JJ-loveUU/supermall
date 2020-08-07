import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home =()=>import('views/home/Home')
const Category =()=>import('views/category/Category')
const Mine =()=>import('views/mine/Mine')
const Shopcar =()=>import('views/shopcar/Shopcar')

export default new Router({
    routes: [
        {
            path: '',
            component:Home
        },
        {
            path: '/home',
            component:Home
        },
        {
            path: '/category',
            component:Category
        },{
            path: '/mine',
            component:Mine
        },
        {
            path: '/shopcar',
            component:Shopcar
        }

    ],
    mode:'history', //hash模式改为history模式

})


//避免Avoid redundant navigation to current location错误
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

