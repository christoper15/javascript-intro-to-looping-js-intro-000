function forLoop(array) {
  for (let i = 0; i < 24; i++) {
    if (i==1) {
        array.push(`I am ${i} strange loop.`)
    } else {
        array.push(`I am ${i} strange loop.`)
    }
  }
  return array;
}


function whileLoop(n) {
    while (n>0) {
        if (n == 10) {
          while (n > 10) {
            console.log("I run once regardless");
            n -= 1;
          }
        }
      }
        console.log("I run once regardless");
        return 'done';
    }
