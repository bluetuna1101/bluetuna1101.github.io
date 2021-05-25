// nodejs 
const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')

// 진입점 결과물 모듈 플러그인으로 생성되는 번들로 웹사이트를 돌릴 수 있다.
module.exports = {
  // 진입점
  entry: {
    // node 전역 변수 __dirname 현제 파일의 경로
    app: path.join(__dirname,'main.js')
  },
  // 결과물에 대한 설정
  output: {
    filename: '[name].js', // app.js
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ],
}