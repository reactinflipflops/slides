[2,2,3].map(function(item) {
  return item + 1;
});

[2,2,3].map((item, index) => item + index);

[2,2,3].map(item => item + 1);

[2,2,3].forEach(item => {
  if (item === 2) {
    console.log('Found the number 2');
  }
});
