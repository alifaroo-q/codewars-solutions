export class Kata {
  static levenshtein(a: string, b: string): number {
    const len1 = a.length;
    const len2 = b.length;

    const d = Array.from({ length: len1 + 1 }, () => Array(len2 + 1).fill(0));

    for (let i = 0; i <= len1; i++) d[i][0] = i;
    for (let j = 0; j <= len2; j++) d[0][j] = j;

    for (let i = 1; i <= len1; i++) {
      for (let j = 1; j <= len2; j++) {
        const cost = a[i - 1] === b[j - 1] ? 0 : 1;
        d[i][j] = Math.min(
          d[i - 1][j] + 1,
          d[i][j - 1] + 1,
          d[i - 1][j - 1] + cost
        );
      }
    }

    return d[len1][len2];
  }
}

console.log(Kata.levenshtein("abc", "abz"));
