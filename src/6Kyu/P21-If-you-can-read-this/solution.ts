export class Kata {
  static to_nato(words: string) {
    const NATO: { [index: string]: string } = {
      A: "Alfa",
      B: "Bravo",
      C: "Charlie",
      D: "Delta",
      E: "Echo",
      F: "Foxtrot",
      G: "Golf",
      H: "Hotel",
      I: "India",
      J: "Juliett",
      K: "Kilo",
      L: "Lima",
      M: "Mike",
      N: "November",
      O: "Oscar",
      P: "Papa",
      Q: "Quebec",
      R: "Romeo",
      S: "Sierra",
      T: "Tango",
      U: "Uniform",
      V: "Victor",
      W: "Whiskey",
      X: "Xray",
      Y: "Yankee",
      Z: "Zulu",
    };

    let str = "";

    for (let w of words) {
      if (w.toUpperCase() in NATO) str += NATO[w.toUpperCase()] + " ";
      else if ([",", ".", "!", "?"].includes(w)) str += w + " ";
    }
    return str.trim();
  }
}
