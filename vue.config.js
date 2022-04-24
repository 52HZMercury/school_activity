module.exports = {
    devServer: {
        proxy: {
            '/back': {
                target: 'http://mercuryblog.site:8080/',
                // 允许跨域
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/back': ''
                }
            },
            '/yb': {
                // 此处的写法，目的是为了 将 /api 替换成 https://www.baidu.com/
                target: 'https://openapi.yiban.cn/data/download?access_token=f39cf499ff748823324c1875b704f4c615a95bae',
                // 允许跨域
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/yb': ''
                }
            },
        },
        open : true
    }
}