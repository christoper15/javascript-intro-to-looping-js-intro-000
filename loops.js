


function doWhileLoop(n) {
  function incrementVariable() {
    i = i + 1;
    return i;
  }
  do {
    console.log("I run once regardless.");
  } while (incrementVariable() < n);
}
