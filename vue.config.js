module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://gaosaiedu.com/api', // 对应自己的接口
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': '',
                },
            },
        },
    },
    publicPath: './'
}