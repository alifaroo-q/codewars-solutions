// Task
// You are given a dictionary/hash/object containing some languages and your test results in the given languages. Return the list of languages where your test score is at least 60, in descending order of the scores.

// Note: the scores will always be unique (so no duplicate values)

// Examples
// {"Java" => 10, "Ruby" => 80, "Python" => 65}   -->  ["Ruby", "Python"]
// {"Hindi" => 60, "Dutch" => 93, "Greek" => 71}  -->  ["Dutch", "Greek", "Hindi"]
// {"C++" => 50, "ASM" => 10, "Haskell" => 20}    -->  []

export class Kata {
  static myLanguages(results: { [index: string]: number }): string[] {
    let newResults = Object.entries(results);
    newResults.sort((a, b) => b[1] - a[1]);
    newResults = newResults.filter((result) => result[1] >= 60);
    return newResults.map((result) => result[0]);
  }
}

console.log(Kata.myLanguages({ Java: 10, Ruby: 80, Python: 65 }));
