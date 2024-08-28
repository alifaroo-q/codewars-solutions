// Your task is to write a function that takes two integers n and m, and returns a sorted array of all integers from n to m inclusive, which have exactly 3 divisors (excluding 1 and the number itself).

// Example:
// solution(2, 20) -> [16]
// 16 has 3 divisors: 2, 4, 8 (1 and 16 aren't included)

export class Kata {
  static divisors(a: number, b: number) {
    const numbers = [];
    let count = 0;

    for (let i = a; i <= b; i++) {
      for (let j = 1; j <= i; j++) {
        if (i % j === 0) count++;
      }
      if (count - 2 === 3) numbers.push(i);
      count = 0;
    }

    return numbers;
  }
}

console.log(Kata.divisors(10000, 100000));
