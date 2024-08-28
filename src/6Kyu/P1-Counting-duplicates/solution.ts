// Count the number of Duplicates

// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice


export class Kata {
  static duplicateCount(text: string): number {
    text = text.toLowerCase();
    const mp: { [index: string]: number } = {};

    for (let i = 0; i < text.length; i++) {
      if (text[i] in mp) mp[text[i]]++;
      else mp[text[i]] = 1;
    }

    const res: string[] = [];

    Object.entries(mp).forEach((val) => {
      if (val[1] > 1) res.push(val[0]);
    });

    return res.length;
  }
}

console.log(Kata.duplicateCount("Indivisibilities"));
