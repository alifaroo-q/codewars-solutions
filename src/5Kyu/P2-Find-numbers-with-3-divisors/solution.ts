// Your task is to write a function that takes two integers n and m, and returns a sorted array of all integers from n to m inclusive, which have exactly 3 divisors (excluding 1 and the number itself).

// Example:
// solution(2, 20) -> [16]
// 16 has 3 divisors: 2, 4, 8 (1 and 16 aren't included)

// Input:
// n - integer (2 ≤ n ≤ 10^14)
// m - integer (2 ≤ m ≤ 10^18)
// NOTE: In Rust, the bounds are (2 ≤ n ≤ 2^51), (20 ≤ m ≤ 2^52).

// Output:
// result - array of integers

export class Kata {
  static solution(n: number, m: number) {
    let divisors = 0;
    const res = [];
    const range = Array.from(
      { length: m - n - 1 },
      (value, index) => n + index
    );

    for (let num of range) {
      for (let i = 1; i <= num; i++) {
        if (num % i === 0 && num !== i && i !== 1) divisors++;
      }
      if (divisors === 3) res.push(num);
      divisors = 0;
    }

    return res;
  }
}

console.log(Kata.solution(2, 100));
