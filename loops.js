function whileLoop(n) {
    while (n>0) {
        if (n == 10) {
          while (n > 10) {
            console.log("I run once regardless");
            n -= 1;
          }
        else {
            n -= 1;
          }
        }
      }
        console.log("I run once regardless");
        return 'done';
    }
