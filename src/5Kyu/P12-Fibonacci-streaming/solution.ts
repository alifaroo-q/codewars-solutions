export class Kata {
  // static fibStreaming() {
  //   return {
  //     [Symbol.iterator]: () => {
  //       let i = 1n;
  //       let oldVal = 0n,
  //         newVal = 1n;
  //       return {
  //         next: () => {
  //           if (i++ <= Infinity) {
  //             [oldVal, newVal] = [newVal, oldVal + newVal];
  //             return { value: oldVal, done: false };
  //           } else {
  //             return {
  //               done: true,
  //             };
  //           }
  //         },
  //       };
  //     },
  //   };
  // }

  static *allFibonacciNumbers() {
    let a = 1,
      b = 1;
    while (true) {
      yield a;
      [a, b] = [b, a + b];
    }
  }
}

const gen = Kata.allFibonacciNumbers()
for (let i = 0; i < 10; i++)
  console.log(gen.next().value);
