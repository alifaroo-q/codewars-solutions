export class Kata {
  static queueTime(customers: number[], n: number) {
    const tills = new Array(n).fill(0);
    for (let customer of customers) {
      let idx = tills.indexOf(Math.min(...tills));
      tills[idx] += customer;
    }
    return Math.max(...tills);
  }
}

console.log(Kata.queueTime([3, 4, 6], 3));
