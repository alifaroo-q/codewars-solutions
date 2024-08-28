export class Kata {
  static frame(score: string) {
    let a = 0,
      b = 0;

    let newScores: any[] = score
      .split(";")
      .map((score) => score.trim())
      .map((val) => val.split("-"));

    newScores.forEach((sc) => {
      let aa = sc[0].split("(")[0];
      let bb = sc[1].split("(")[0];

      if (parseInt(aa) > parseInt(bb)) a++;
      else b++;
    });

    return [a, b];
  }
}

console.log(
  Kata.frame(
    "24-79(72); 16-101(53); 86(58)-27; 31-90(74); 0-115(115); 67-40; 61-21; 81(55)-23; 51-14; 124(56,68)-4; 67-12; 108(85)-15; 1-117(117); 1-92(92); 130(112)-0; 1-106(53); 59-39"
  )
);
