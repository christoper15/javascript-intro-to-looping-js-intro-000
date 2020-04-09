function whileLoop(n) {
    while (n > -1) {
        if (n == 10) {
          while (n > -1) {
            console.log("I run once regardless");
            n -= 1;
          }
        }
        else {
            console.log(n);
            n -= 1;
          }
        }
        console.log("I run once regardless");
        return 'done';
      }
