export class Kata {
  static readability(sentences: string) {
    function syllable(word: string) {
      if (word.length <= 3) return 1;
      word = word.toLowerCase();
      word = word.replace(/(?:[^laeiou]es|ed|[^laeiou]e)$/, "");
      word = word.replace(/^y/, "");
      // @ts-ignore
      return word.match(/[aeiou]{1,2}/g).length;
    }

    const isAlphabet = (str: string) => {
      str = str.toLowerCase();
      if (str >= "a" && str <= "z") return true;
      return false;
    };

    sentences = sentences
      .split("")
      .filter((val) => isAlphabet(val) || val === " " || val === ".")
      .join("");

    console.log(sentences);

    const noOfSentences = sentences.split(". ").length;
    const noOfWords = sentences
      .split(". ")
      .reduce((a, c) => c.split(" ").length + a, 0);

    const avgWords = noOfWords / noOfSentences;
    const noOfSyllables = sentences
      .split(". ")
      .reduce(
        (a, c) => c.split(" ").reduce((aa, cc) => syllable(cc) + aa, 0) + a,
        0
      );

    const avgSyllables = noOfSyllables / noOfWords;

    return parseFloat(
      (0.39 * avgWords + 11.8 * avgSyllables - 15.59).toFixed(2)
    );
  }
}

console.log(Kata.readability(`Oh no! The lemming is falling.`));

// (0.39 * 4) +  (11.8 * 1.5) - 15.59 = 3.67
