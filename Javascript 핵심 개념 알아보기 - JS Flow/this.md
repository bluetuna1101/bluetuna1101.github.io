# this

thisBinding은 실행 컨텍스트가 활성화 될 때 한다.
따라서 this 는 함수가 실행(호출)될 때 동적으로 바인딩된다

1. 전역공간에서 : window / global
2. 함수 호출시 : window / global
3. 메소드 호출시 : 메소드 호출 주체(메소드명 앞)
4. callback 호출시 :
   기본적으로는 함수내부에서와 동일
   제어권을 가진 함수가 callback의 this를 명시한 경우 그에 따른다.
   개발자가 this를 바인딩한 채로 callback을 넘기면 그에 따른다.
5. 생성자함수 호출시 : 인스턴스
