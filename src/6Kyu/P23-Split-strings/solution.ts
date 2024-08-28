// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

export class Kata {
  static solution(str: string) {
    const res = [];
    for (let i = 0; i < str.length; i += 2) {
      res.push(str.slice(i, i + 2));
    }

    if (str.length % 2 !== 0) res[res.length - 1] = res.at(-1) + "_";

    return res;
  }
}

console.log(Kata.solution("abcdef"));
