# webpack

webapck 이 구조를 보고 결과를 내는데 어디를 봐야 구조를 이해할 수 있냐를 entry에 적어줌
걀과는 output

module : 모듈 처리 방식을 명시
plugins : 모듈이 처리 되고나서 추가적으로 어떤 작업을 더 진행해야하는지 배열로 명시

## Babel

바벨(Babel)은 ES6 이상의 코드를 ES5 이하 버전으로 변환하기 위해 사용
@babel/core: 바벨이 실제 동작하는 모듈입니다.
@babel/preset-env: 바벨의 지원 스펙을 지정합니다.(따로 명시 안하고 이 모듈이 다해준다)
babel-loader: 웹팩(Webpack) 지원을 위해 사용합니다.
@babel/ployfill: 구형 브라우저 지원용(너무 많은 코드가 들어가있어서 구형브라우저를 지원할 필요가 없다면 설치하지 않는것이 좋다)
.babelrc 파일을 만들고 설정해줘야한다
