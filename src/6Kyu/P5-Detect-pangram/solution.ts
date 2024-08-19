export class Kata {
  static isPangram(phrase: string): boolean {
    const isAlphabet = (str: string) => {
      if (str >= "a" && str <= "z") return true;
      return false;
    };

    const alphabets = "abcdefghijklmnopqrstuvwxyz";
    const mp: { [index: string]: number } = {};
    phrase = phrase.toLowerCase();

    for (let p of phrase) {
      if (!isAlphabet(p)) continue;
      if (p in mp) mp[p]++;
      else mp[p] = 1;
    }

    return Object.keys(mp).sort().join("") === alphabets;
  }
}

console.log(Kata.isPangram("The quick brown fox jumps over the lazy dog."));
