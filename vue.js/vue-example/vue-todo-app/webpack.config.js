// nodejs 
const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')

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
      },
      {
        //vue 에서 <script> 를 사용하기 위함
        test: /\.js$/,
        // node_modules 안에 파일은 굳이 바벨 로더로 해석할 필요가 없다고 명시(exclude 사용)
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        //vue 에서 <style> 를 사용하기 위함
        test: /\.css$/,
        // 2개 이상은 use 동작하는 순서대로 입력해 줘야함
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }

    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      // html 경로 (이 플러그인이 인덱스를 가져가서 디스트로 만들어준다)
      template: path.join(__dirname, 'index.html')
    })
  ],
}