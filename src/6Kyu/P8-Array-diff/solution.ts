// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

export class Kata {
  static arrayDiff(a: number[], b: number[]): number[] {
    // const res: number[] = [];

    // for (let num of a) {
    //   if (b.includes(num)) continue;
    //   else res.push(num);
    // }
    // return res;

    const res = a.filter((num) => !b.includes(num));
    return res;
  }
}

console.log(Kata.arrayDiff([1, 2, 2, 2, 3], [2]));
