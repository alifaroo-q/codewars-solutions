// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// Input = "The sunset sets at twelve o' clock."
// Output = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"

export class Kata {
  static alphabetPosition(text: string): string {
    const isAlphabet = (str: string) => {
      if (str >= "a" && str <= "z") return true;
      return false;
    };

    text = text.toLowerCase();
    let newText = "";

    for (let a of text) {
      if (isAlphabet(a)) newText += a;
    }

    const numbers: number[] = [];

    for (let a of newText) {
      numbers.push(a.charCodeAt(0) - 97 + 1);
    }

    return numbers.join(" ");
  }
}

console.log(Kata.alphabetPosition("The sunset sets at twelve o' clock."));
