export class Kata {
  static pointsNumber(radius: number) {
    function distance(x1: number, y1: number, x2: number, y2: number) {
      return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
    }

    let tPoints = 0;
    let rDist = radius;
    for (let i = radius * -1; i <= radius; i++) {
      for (let j = radius * -1; j <= radius; j++) {
        if (distance(i, j, 0, 0) <= rDist) tPoints++;
      }
    }
    return tPoints;
  }
}

console.log(Kata.pointsNumber(2));
