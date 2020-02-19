const path = require('path')
const px2rem = require('postcss-px2rem')

module.exports = {
    // 只能写 vue 封装的配置

    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    px2rem({
                        remUnit: 75.0 //设计稿等分后的rem值  375/10
                    })
                ]
            }
        }
    },

    configureWebpack: {
        // 更改 webpack 原生配置
        resolve: {
            extensions: ['.js', '.vue', '.json'], // 配置可以省略的后缀名
            alias: { // 路径别名(简写方式)
                // 'vue$': 'vue/dist/vue.esm.js',  // 表示精准匹配  带vue编译器     配置后会导致包更大
                '@': path.resolve(__dirname, 'src'),
                '@components': path.resolve(__dirname, 'src/components'),

            }
        }
    },

    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:4000',
                pathRewrite: {
                    '^/api': ''
                },
                changeOrigin: true
            },
        }
    }
}