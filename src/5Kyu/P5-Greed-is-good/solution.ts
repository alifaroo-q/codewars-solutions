// Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

//  Three 1's => 1000 points
//  Three 6's =>  600 points
//  Three 5's =>  500 points
//  Three 4's =>  400 points
//  Three 3's =>  300 points
//  Three 2's =>  200 points
//  One   1   =>  100 points
//  One   5   =>   50 point
// A single die can only be counted once in each roll. For example, a given "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

// Example scoring

//  Throw       Score
//  ---------   ------------------
//  5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
//  1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
//  2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)
// Note: your solution must not modify the input array.

export class Kata {
  static score(dice: number[]) {
    const singleScore: { [index: number]: number } = {
      1: 100,
      5: 50,
    };

    const tripleScore: { [index: number]: number } = {
      1: 1000,
      6: 600,
      5: 500,
      4: 400,
      3: 300,
      2: 200,
    };

    const mp: { [key: number]: number } = {};
    for (const d of dice) {
      mp[d] = (mp[d] || 0) + 1;
    }

    let total = 0;

    for (const [value, count] of Object.entries(mp)) {
      const numValue = parseInt(value);
      if (count >= 3) {
        total += tripleScore[numValue];
        mp[numValue] -= 3;
      }
    }

    for (const [value, count] of Object.entries(mp)) {
      const numValue = parseInt(value);
      if (count > 0) {
        if (numValue === 1) {
          total += count * singleScore[1];
        } else if (numValue === 5) {
          total += count * singleScore[5];
        }
      }
    }

    return total;
  }
}

console.log(Kata.score([1, 1, 1, 3, 3]));
