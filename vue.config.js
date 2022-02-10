module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://jepnmcuf.dnat.tech/',
                // 允许跨域
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}