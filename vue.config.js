const webpack = require('webpack')
module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        Popper: ['popper.js', 'default']
      })
    ],
    devServer: {
      proxy: { // api代理
        '/api': { /// / 凡是到/api的请求都会发往下面的地址
          target: 'http://39.107.230.57:9100',
          changeOrigin: true,
          pathRewrite: {
            '^/api': '/api'
          } // 允许跨域
        }
      }
    }

  }
}
