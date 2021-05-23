## vue-loader

vue-loader는 다음과 같이 작성된 Vue 컴포넌트를 일반적인 자바스크립트 모듈로 변환할 수 있는 webpack에서 사용하는 로더입니다.

### webpack

webpack은 모듈의 묶음입니다. 각 파일을 모듈로 간주하고 파일 간의 종속성을 파악한 다음 정적 Asset으로 묶어서 배포함
(작성한 구조를 웹에서 잘 돌아갈 수 있는 형태의 (ex- .js .html)파일로 변환해줌)

### 뷰 컴포넌트 스펙

_.vue 파일은 HTML과 같은 문법을 사용하여 Vue 컴포넌트를 작성합니다. 각각의 _.vue 파일은 3가지 유형의 최상위 language block인 <template>, <script>와, <style>로 이루어집니다.

#### Language Blocks

<template>
1. 기본언어 html
2. 각 뷰 파일은 한번에 최대 하나의 탬플핏 블록을 포함할 수 있습니다
3. 내용은 문자열로 추출되어 컴파일 된 Vue 컴포넌트의 template 옵션으로 사용

<script>
1. 기본언어 js  (ES2015는babel-loader 또는bubble-loader가 감지되면 자동으로 지원
2. 각 *.vue 파일은 한번에 최대 하나의 <script> 블록을 포함할 수 있습
3. 스크립트는 CommonJS와 같은 (webpack을 통해 번들된 일반적인 .js 모듈같은)환경 에서 실행됩니다. 다른 의존성을 require()할 수 있습니다. 또한 ES2015를 지원하여 import와 export를 사용할 수 있습니다.

<style>
1. 기본언어 css
2. 하나의 뷰 파일에서 스타일 태그를 여러개 지원 가능
3. <style>태그는 scoped 또는 module 속성을 가질 수 있습니다. (Scoped CSS와 CSS Modules를 확인하세요) 현재 컴포넌트에 스타일을 캡슐화 하는데 도움을 줍니다. 캡슐화 모드는 다른 여러개의 <style> 태그를 동일한 컴포넌트에 사용할 수 있습니다.
4. 기본적으로, 내용이 추출되어 style-loader를 사용해 실제로 <style> 태그로 문서의 <head>에 동적으로 삽입
