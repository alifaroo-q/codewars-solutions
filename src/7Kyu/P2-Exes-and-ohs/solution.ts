// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

export class Kata {
  static XO(str: string): boolean {
    str = str.toLowerCase();
    const mp: { [index: string]: number } = {};

    for (let s of str) {
      if ((s === "x" || s === "o") && s in mp) mp[s]++;
      else if ((s === "x" || s === "o") && !(s in mp)) mp[s] = 1;
    }

    return mp["x"] === mp["o"];
  }
}

console.log(Kata.XO("oxxs"));
