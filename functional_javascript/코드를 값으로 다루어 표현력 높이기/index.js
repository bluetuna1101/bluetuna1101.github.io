const curry = f =>
  (a, ..._) => _.length ? f(a, ..._) : (..._) => f(a, ..._); // 인자를 하나만 받으면 : 뒤에 함수를 기다리고 두개이상 받으면 함수를 바로 실행한다 

const map = curry((f, iter) => {
  let res = [];
  for (const a of iter) {
    res.push(f(a));
  }
  return res;
});

const filter = curry((f, iter) => {
  let res = [];
  for (const a of iter) {
    if (f(a)) res.push(a);
  }
  return res;
});

const reduce = curry((f, acc, iter) => {
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }
  for (const a of iter) {
    acc = f(acc, a);
  }
  return acc;
});
