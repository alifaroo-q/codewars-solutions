// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"

// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"

export class Kata {
  static toCamelCase(str: string): string {
    const newStr = str.split(/[_-]/g);
    for (let i = 1; i < newStr.length; i++) {
      newStr[i] = newStr[i][0].toUpperCase().concat(newStr[i].slice(1));
    }

    return newStr.join("");
  }
}

console.log(Kata.toCamelCase("The_stealth-warrior"));
