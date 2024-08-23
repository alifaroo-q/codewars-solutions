// Find the missing letter
// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a','b','c','d','f'] -> 'e'
// ['O','Q','R','S'] -> 'P'
// (Use the English alphabet with 26 letters!)

export class Kata {
  static findMissingLetter(array: string[]) {
    const final = [];
    const current: number[] = [];
    for (
      let i = array[0].charCodeAt(0);
      i <= array[array.length - 1].charCodeAt(0);
      i++
    ) {
      final.push(i);
    }

    for (let a of array) {
      current.push(a.charCodeAt(0));
    }

    return String.fromCharCode(final.filter((d) => !current.includes(d))[0]);
  }
}

console.log(Kata.findMissingLetter(["O", "Q", "R", "S"]));
