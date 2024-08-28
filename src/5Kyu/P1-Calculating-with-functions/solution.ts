// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:
// eight(dividedBy(three()));

export class Kata {
  static zero = (callback?: any) => (callback ? callback(0) : 0);
  static one = (callback?: any) => (callback ? callback(1) : 1);
  static two = (callback?: any) => (callback ? callback(2) : 2);
  static three = (callback?: any) => (callback ? callback(3) : 3);
  static four = (callback?: any) => (callback ? callback(4) : 4);
  static five = (callback?: any) => (callback ? callback(5) : 5);
  static six = (callback?: any) => (callback ? callback(6) : 6);
  static seven = (callback?: any) => (callback ? callback(7) : 7);
  static eight = (callback?: any) => (callback ? callback(8) : 8);
  static nine = (callback?: any) => (callback ? callback(9) : 9);

  static plus = (x: any) => (num: any) => num + x;
  static minus = (x: any) => (num: any) => num - x;
  static times = (x: any) => (num: any) => num * x;
  static dividedBy = (x: any) => (num: any) => Math.floor(num / x);
}

console.log(Kata.five(Kata.plus(Kata.five())));
