// Create a function that takes a number and returns an array of strings containing the number cut off at each digit.

// Examples
// 420 should return ["4", "42", "420"]
// 2017 should return ["2", "20", "201", "2017"]
// 2010 should return ["2", "20", "201", "2010"]
// 4020 should return ["4", "40", "402", "4020"]
// 80200 should return ["8", "80", "802", "8020", "80200"]
// PS: The input is guaranteed to be an integer in the range [0, 1000000]

export class Kata {
  static createArrayOfTiers(num: number): string[] {
    const newNum = num.toString();
    let prev = "";
    const res = [];

    for (let n of newNum) {
      prev += n;
      res.push(prev);
    }

    return res;
  }
}

console.log(Kata.createArrayOfTiers(420));
