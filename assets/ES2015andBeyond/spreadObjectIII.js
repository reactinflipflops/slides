const shoppingCartA = {
  apples: 2,
  pears: 4
};

const shoppingCartB = {
  apples: 6,
  bananas: 1,
  ...shoppingCartA
};

// shoppingCartB = {
//   apples: 2,
//   pears: 4,
//   bananas: 1
// }
