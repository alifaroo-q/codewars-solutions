// Write a function that doubles every second integer in a list, starting from the left.

// Example:

// For input array/list :

// [1,2,3,4]
// the function should return :

// [1,4,3,8]

export class Kata {
  static doubleEveryOther(a: number[]): number[] {
    for (let i = 0; i < a.length; i++) {
      if (i % 2 !== 0) a[i] = a[i] * 2;
    }
    return a;
  }
}

console.log(Kata.doubleEveryOther([1, 2, 3, 4]));
