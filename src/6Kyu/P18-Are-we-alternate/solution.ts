// Create a function isAlt() that accepts a string as an argument and validates whether the vowels (a, e, i, o, u) and consonants are in alternate order.

// isAlt("amazon")
// // true
// isAlt("apple")
// // false
// isAlt("banana")
// // true
// Arguments consist of only lowercase letters.

export class Kata {
  static isAlt(word: string) {
    for (let i = 1; i < word.length; i++) {
      if ("aeiou".includes(word[i]) === "aeiou".includes(word[i - 1])) {
        return false;
      }
    }
    return true;
  }
}

console.log(Kata.isAlt("banana"));
