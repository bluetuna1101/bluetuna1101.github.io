// nodejs 
const path = require('path')

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
  module: {},
  plugins: {},
}