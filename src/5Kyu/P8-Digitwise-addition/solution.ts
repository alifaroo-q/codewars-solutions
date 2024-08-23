// Digitwise Addition
// Digitwise addition is a special kind of addition where instead of adding 1 normally to the number, it adds 1 to every digit of that number. If the digit is a 9, we replace it with a 10 without carrying over to the next digit.

// Examples
// 123 -> 234
// 910 -> 1021
// 789 -> 8910
// Task
// Program a function that takes two numbers, n and k, and outputs the number of digits in n after applying Digitwise addition k times. Since the answer can be very large, return the answer modulo 1_000_000_007.

// Your solution is expected to be O(klogn).

// Examples
// (9812, 2) -> 6
// # Explanation:
// # 9812 -> 10923 -> 211034 -> 6 digits

// (9899, 3) -> 8
// # Explanation:
// # 9899 -> 1091010 -> 21102121 -> 32213232 -> 8 digits

export class Kata {
  static digitwiseAddition(n: number, k: number) {
    let newN = n.toString();
    let temp = "";
    
    while (k != 0) {
      temp = "";
      for (let d of newN) {
        const num = parseInt(d) + 1;
        if (num === 10) temp += "10";
        else temp += num;
      }
      k--;
      newN = temp;
    }

    return temp.length;
  }
}

console.log(Kata.digitwiseAddition(544640130, 20));
