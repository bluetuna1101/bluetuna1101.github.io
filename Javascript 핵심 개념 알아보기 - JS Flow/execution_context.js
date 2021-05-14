// console.log 실행순서는 안에 숫자와 같다
// call stack ? : 현재 어떤 함수가 동작하고 잇는지, 다음에 어떤 함수가 호출되어야 하는 지 등을 제어하는 자료구조

var a = 1;
function outer() {
  console.log(1);

  function inner() {
    console.log(2);
    var a = 3 ;
  }

  inner();

  console.log(3);
}
outer();
console.log(4);


//HOISTING


