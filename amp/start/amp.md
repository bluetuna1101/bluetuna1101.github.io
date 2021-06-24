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