
const path = require('path');
function resolve (dir) {
    return path.join(__dirname, dir)
}

module.exports = {
  // 基本路径
  // build路径 
  baseUrl: './', //static/shop
  // 输出文件目录
  outputDir: 'dist',
  //静态资源文件路径
  assetsDir: 'assets',
  pages: {
    index: {
      // page 的入口
      entry: 'src/main.js',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: '',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    // 当使用只有入口的字符串格式时，
    // 模板会被推导为 `public/subpage.html`
    // 并且如果找不到的话，就回退到 `public/index.html`。
    // 输出文件名会被推导为 `subpage.html`。
    // subpage: 'src/main.js'
  },
  // eslint-loader 是否在保存的时候检查
  lintOnSave: true,
  // 资源路径别名
  // https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
  chainWebpack: (config) => {
    config.resolve.alias
    .set('@$', resolve('src'))
    .set('@assets',resolve('src/assets'))
    .set('@components',resolve('src/components'))
    .set('@view',resolve('src/view'))
    .set('@common',resolve('src/common'))
    .set('@base',resolve('src/base'))
    .set('@static',resolve('src/static'))
    config.module
      .rule('ts-loader')
      .test(/\.tsx?$/)
      .exclude.add(/node_modules/)
      .end()
      .use('ts-loader')
      .loader('ts-loader')
      .options({
        appendTsSuffixTo: [/\.vue$/]
      })
  },
  configureWebpack: () => {},
  // vue-loader 配置项
  // https://vue-loader.vuejs.org/en/options.html
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: true,
  // css相关配置
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {
      /* stylus: {
        import: path.resolve(__dirname, './src/common/stylus/variables.styl')
      }, */
    },
    // 启用 CSS modules for all css / pre-processor files.
    modules: false
  },
  parallel: require('os').cpus().length > 1,
  // webpack-dev-server 相关配置
  devServer: {
    open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: 8080,
    https: false,
    hotOnly: false,
    disableHostCheck: true,
    proxy: {
      '/api': {
        target: 'http://192.168.71.77:8080/',//http://ybykadmin.prowealth.com.cn/
        secure: false,
        changeOrigin: true, 
      },
    }, // 设置代理
    before: app => {}
   },
  // 第三方插件配置
  pluginOptions: {
  // ...
  }
}
