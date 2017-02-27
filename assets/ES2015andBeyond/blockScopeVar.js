function varTest() {
  var x = 31;
  if (true) {
    var x = 71;
    console.log(x);
  }
  console.log(x);
}
