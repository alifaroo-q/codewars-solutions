// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

export class Kata {
  static findUniq(arr: number[]) {
    arr = arr.sort((a, b) => b - a);
    if (arr[0] === arr[1]) return arr.at(-1);
    return arr[0];
  }
}

console.log(Kata.findUniq([1, 1, 1, 2, 1, 1]));
