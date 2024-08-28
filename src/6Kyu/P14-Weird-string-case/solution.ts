// Write a function that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

// The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

// Examples:
// "String" => "StRiNg"
// "Weird string case" => "WeIrD StRiNg CaSe"

export class Kata {
  static toWeirdCase(str: string): string {
    str = str.toLowerCase();
    const newStr = str.split(" ");
    const res = [];

    for (let str of newStr) {
      let temp = "";
      for (let i = 0; i < str.length; i++) {
        if (i % 2 === 0) temp += str[i].toUpperCase();
        else temp += str[i];
      }
      res.push(temp);
    }

    return res.join(" ");
  }
}

console.log(Kata.toWeirdCase("String is good"));
