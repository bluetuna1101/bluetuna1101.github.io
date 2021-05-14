// ThisBinding
// 메소드 호출시

var a = {
  b: function() {
    console.log(this);
  }
}
a.b();  // a 가 this

var a = {
  b: {
    c: function() {
      console.log(this);
    }
  }
}
a.b.c(); // a.b 가 this (쉽게생각해서 메서드. 앞에있는게 this다 라고 생각하면 편하다)

// 내부함수에서의 우회법 (es5 bind es6 화살표 함수로 우회가능)
var a = 10 ;
var obj = {
  a: 20,
  b: function() {
    console.log(this.a);   // 20 이 나옴

    function c() {
      console.log(this.a);  // window.a로 찾아서 전역인 10이 나온다
    }
    c();
  }
}
obj.b();

//20 이 나오게 우회가 가능하다
var a = 10 ;
var obj = {
  a: 20,
  b: function() {
    var self = this;
    console.log(this.a);   // 20 이 나옴

    function c() {
      console.log(self.a);  // this 를 다른 변수에 담아사 20이 나온다
    }
    c();
  }
}
obj.b();

