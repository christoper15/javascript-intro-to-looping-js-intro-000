


function doWhileLoop(n) {
  do {
    function incrementVariable() {
      i = i + 1;
      return i;
    }
    console.log("I run once regardless.");
  } while (incrementVariable() < n);
}
