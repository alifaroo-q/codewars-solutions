// Write a function named first_non_repeating_letter† that takes a string input, and returns the first character that is not repeated anywhere in the string.

// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

// As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

// If a string contains all repeating characters, it should return an empty string ("");

// † Note: the function is called firstNonRepeatingLetter for historical reasons, but your function should handle any Unicode character.

export class Kata {
  static firstNonRepeatingLetter(s: string) {
    let map: { [index: string]: number }, len, i, char;

    map = {};

    for (i = 0; i < s.length; i++) {
      char = s[i].toLowerCase();
      map[char] = (map[char] || 0) + 1;
    }

    for (i = 0; i < s.length; i++) {
      char = s[i];
      if (map[char.toLowerCase()] == 1) return char;
    }

    return "";
  }
}

console.log(Kata.firstNonRepeatingLetter("moonmen"));
