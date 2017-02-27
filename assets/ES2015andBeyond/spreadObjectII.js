const shoppingCartA = {
  apples: 2,
  pears: 4
};

const shoppingCartB = {
  ...shoppingCartA,
  apple: 6,
  bananas: 1
};

// shoppingCartB = {
//   apples: 6,
//   pears: 4,
//   bananas: 1
// }
