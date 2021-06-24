## 작성해보기
1. 문자 집합 포함 <meta charset="utf-8" />
2. 표준 링크 포함: 모든 AMP 문서에는 해당 문서의 '표준' 버전을 참조하는 링크가 있어야 함
- <link rel="canonical" href="/article.html" />
3. amp 속성 지정 : html 태그에 ⚡ or amp 넣어주기
4. 표시 영역 지정
- AMP에서는 표시 영역의 width 및 minimum-scale을 정의해야 합니다. 이 값은 각각 device-width 및 1로 정의
- ex) <meta name="viewport" content="width=device-width" />
5. css는 link 나 import 불가 ! <style amp-custom> 으로 헤드에 작성해주고 오로직 한개의 태그만 사용 가능
6. 타사 자바스크립 제와
- 모든 자바스크립트는 비동기식이여야 함(즉, 스크립트 태그에 async 속성을 포함해야 함).
AMP 라이브러리 및 페이지에 있는 AMP 구성요소용으로 자바스크립트를 사용해야 함.
이와 같은 요구사항으로 인해 다음에 명시된 경우를 제외하고는 AMP에서 모든 사용자 생성/타사 자바스크립트의 사용이 사실상 배제
7. AMP CSS 상용구 포함: article.amp.html 참조
- <style amp-boilerplate> tag 를 사용 시 자바스크립 라이브러리가 로드될 때 까지 본문 컨텐츠를 숨기며, 그 다음 렌더링 됨. , 즉 FOUC(Flash Of Unstyled Content)를 방지하기 위해 이러한 작업을 수행
- </style><noscript><style amp-boilerplate> 태그는 자바스크립트가 브라우저에서 사용 중지된 경우 이 논리를 되돌림


### 필수 마크업

- <html amp> 사용 : 페이지를 AMP 콘텐츠로 식별
- <head>><body> 필수
- <head> 내에 <link rel="canonical" href="$SOME_URL"> 태그를 포함해야함 (검색 가능한 페이지 설정)
- AMP HTML 문서는 head 태그에 상용구를 포함해야 함(index.html참고)
- 대부분의 HTML 태그는 AMP HTML에서 바로 사용할 수 있지만, <img> 같은 일부 태그는 기존과 동일하거나 더 향상된 사용자 지정 AMP HTML 태그로 대체됩니다(또한 문제가 있는 일부 태그는 사용이 금지 
참고 : https://amp.dev/ko/documentation/guides-and-tutorials/learn/spec/amphtml/?format=websites
- style 은 <style amp-custom> 모든 AMP 페이지에는 하나의 스타일시트 및 인라인 스타일만 삽입할 수 있으며, 특정 선택자는 사용 불가 
참고 : https://amp.dev/ko/documentation/guides-and-tutorials/develop/style_and_layout/style_pages/?format=websites
- link 연결 
비 amp 페이지 <link rel="amphtml" href="https://www.example.com/url/to/amp/document.html">
amp 페이지  <link rel="canonical" href="https://www.example.com/url/to/full/document.html">


### 허용되지 않는 스타일
- !important
- transition, @keyframes는 opacity만 허용


#### 유효성 검사
- url 에 #development=amp4email 추가해보기

