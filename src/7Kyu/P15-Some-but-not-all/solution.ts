export class Kata {
  static someButNotAll(seq: any, pred: any) {
    const newSeq = Array.from(seq);
    return newSeq.some(pred) && !newSeq.every(pred);
  }
}

console.log(Kata.someButNotAll("!!", (str: any) => /[a-z]/i.test(str)));
