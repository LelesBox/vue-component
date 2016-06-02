/*eslint-env node */
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// var options = require('./webpack.base.js');
var options = {};
options.module = {
  loaders: [
    { test: /\.vue$/, loader: 'vue' },
    { test: /\.js$/, loader: 'babel' }
  ]
}
options.vue={
  loaders: {
    // js: 'babel!eslint'
  }
}
options.entry = './src/components/swipe';
options.output = {
  library: 'VueSwiper',
  libraryTarget: 'umd',
  filename: 'vue-swiper.js',
  path: './component'
};
options.externals = {
  vue: 'Vue'
};
options.plugins = [ new ExtractTextPlugin('vue-swiper.css') ];
options.vue.loaders.css = ExtractTextPlugin.extract('vue-style', 'css');
module.exports = options;
