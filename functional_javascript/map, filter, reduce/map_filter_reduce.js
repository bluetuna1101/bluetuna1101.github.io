const log = console.log;


  const products = [
    {name: '반팔티', price: 15000},
    {name: '긴팔티', price: 20000},
    {name: '핸드폰케이스', price: 15000},
    {name: '후드티', price: 30000},
    {name: '바지', price: 25000}
  ];



// # map 
//map 함수는 callbackFunction 을 실행한 결과를 가지고 새로운 배열을 만들 때 사용합니다.


  const map = (f, iter) => {
    let res = [];
    for (const a of iter) {
      res.push(f(a));
    }
    return res;
  };

  // let names = [];
  // for (const p of products) {
  //   names.push(p.name);
  // }
  // log(names);

  log(map(p => p.name, products));

  // let prices = [];
  // for (const p of products) {
  //   prices.push(p.price);
  // }
  // log(prices);

  log(map(p => p.price, products));



// # 이터러블 프로토콜을 따른 map의 다형성


  log([1, 2, 3].map(a => a + 1));

  log(map(el => el.nodeName, document.querySelectorAll('*')));

  // const it = document.querySelectorAll('*')[Symbol.iterator]();
  // log(it.next());
  // log(it.next());
  // log(it.next());
  // log(it.next());
  // log(it.next());

  function* gen() {
    yield 2;
    if (false) yield 3;
    yield 4;
  }

  log(map(a => a * a, gen()));

  let m = new Map();
  m.set('a', 10);
  m.set('b', 20);
  log(new Map(map(([k, a]) => [k, a * 2], m)));

  console.clear();



// # filter
// filter 함수는 명칭과 같이 callbackFunction의 조건에 해당하는 모든 요소가 있는 배열을 새로 생성하는 기능을 합니다.


  const filter = (f, iter) => {
    let res = [];
    for (const a of iter) {
      if (f(a)) res.push(a);
    }
    return res;
  };

  // let under20000 = [];
  // for (const p of products) {
  //   if (p.price < 20000) under20000.push(p);
  // }
  // log(...under20000);

  log(...filter(p => p.price < 20000, products));

  // let over20000 = [];
  // for (const p of products) {
  //   if (p.price >= 20000) over20000.push(p);
  // }
  // log(...over20000);

  log(...filter(p => p.price >= 20000, products));

  log(filter(n => n % 2, [1, 2, 3, 4]));

  log(filter(n => n % 2, function* () {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
  }()));

  console.clear();


// # reduce
// 값을 축약하는 함수


  const nums = [1, 2, 3, 4, 5];

  let total = 0;
  for (const n of nums) {
    total = total + n;
  }
  log(total);

  const reduce = (f, acc, iter) => {
    if (!iter) { // 첫번째 값 없을때 처리
      iter = acc[Symbol.iterator]();
      acc = iter.next().value;
    }
    for (const a of iter) {
      acc = f(acc, a);
    }
    return acc;
  };

  const add = (a, b) => a + b;

  log(reduce(add, 0, [1, 2, 3, 4, 5]));
  // 15

  log(add(add(add(add(add(0, 1), 2), 3), 4), 5));
  // 15

  log(reduce(add, [1, 2, 3, 4, 5]));
  // 15

  console.clear();



  log(
    reduce(
      (total_price, product) => total_price + product.price,
      0,
      products));
