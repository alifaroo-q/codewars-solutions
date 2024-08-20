// Make me slow! Calling makeMeSlow() should take at least 7 seconds.

export class Kata {
  static makeMeSlow() {
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 7000);
  }
}

Kata.makeMeSlow();
