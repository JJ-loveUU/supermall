//创建别名
const path = require('path')
const resolve = dir => path.join(__dirname, dir)

module.exports = {
    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('assets', resolve('src/assets'))
            .set('common', resolve('src/common'))
            .set('components', resolve('src/components'))
            .set('network', resolve('src/network'))
            .set('views', resolve('src/views'))
        // set第一个参数：设置的别名，第二个参数：设置的路径
    }
}