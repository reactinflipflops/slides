function greaterThan(n) {
  return function(m) { return m > n; };
}

const greaterThan10 = greaterThan(10);

// true
console.log(greaterThan10(11));
