// Calculate the number of items in a vector that appear at the same index in each vector, with the same value.

//   ([1 2 3 4 5], [1 2 2 4 3]) => 0.6
//   ([1 2 3], [1 2 3]) => 1.0
// Affinity value should be realized on a scale of 0.0 to 1.0, with 1.0 being absolutely identical. Two identical sets should always be evaluated as having an affinity of 1.0.

// Hint: The last example test case holds a significant clue to calculating the affinity correctly.

export class Kata {
  static vertorAffinity(xs: any[], ys: any[]) {
    if (xs.length === 0 && ys.length === 0) return 1;
    if (xs.length === 0 || ys.length === 0) return 0;

    let same = 0;
    for (let i = 0; i < xs.length; i++) {
      if (xs[i] === ys[i]) same++;
    }

    return xs.length > ys.length ? same / xs.length : same / ys.length;
  }
}

console.log(Kata.vertorAffinity([6,6,6,6,6,6],[6]));
