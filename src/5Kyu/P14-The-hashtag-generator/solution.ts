export class Kata {
  static hashtagGenerator(str: string) {
    if (str.length === 0) return false;

    str = str.trim();
    str = str.replace(/\s{2,}/g, " ");
    str =
      "#" +
      str
        .split(" ")
        .map((val) => val[0].toUpperCase() + val.slice(1))
        .join("");

    return str.length > 140 ? false : str;
  }
}

console.log(Kata.hashtagGenerator("    Hello     World   "));
