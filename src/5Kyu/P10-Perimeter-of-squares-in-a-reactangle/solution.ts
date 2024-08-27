// The drawing shows 6 squares the sides of which have a length of 1, 1, 2, 3, 5, 8. It's easy to see that the sum of the perimeters of these squares is : 4 * (1 + 1 + 2 + 3 + 5 + 8) = 4 * 20 = 80 

// Could you give the sum of the perimeters of all the squares in a rectangle when there are n + 1 squares disposed in the same manner as in the drawing:

export class Kata {
  static perimeter(n: number) {
    const bucket: number[] = [];
    const fib = (n: number, memo: { [index: number]: number } = {}) => {
      if (n in memo) return memo[n];
      if (n <= 2) return 1;
      memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
      return memo[n];
    };

    for (let i = 1; i <= n + 1; i++) {
      bucket.push(fib(i));
    }

    return bucket.reduce((a, c) => a + c, 0) * 4;
  }
}

console.log(Kata.perimeter(7));
