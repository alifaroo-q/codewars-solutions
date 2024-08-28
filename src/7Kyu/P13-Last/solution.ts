// Find the last element of the given argument(s). If a single argument is passed and is a list/array or a string, return its last element. It is guaranteed that there will be at least one argument and that single-argument arrays/lists/strings will not be empty.

// Examples
// last(5)               ==> 5
// last([1, 2, 3, 4])    ==>  4
// last("xyz")           ==> "z"
// last(1, 2, 3, 4)      ==>  4
// last([1, 2], [3, 4])  ==>  [3, 4]
// last([[1, 2], [3, 4]])  ==>  [3, 4]

export class Kata {
  static last(...args: any) {
    if (arguments.length === 1) {
      const arg = arguments[0];
      if (Array.isArray(arg) || typeof arg === "string") {
        return arg[arg.length - 1];
      }
      return arg;
    } else {
      return arguments[arguments.length - 1];
    }
  }
}

console.log(Kata.last([1], [2], [3]));
