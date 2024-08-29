export class Vector {
  constructor(private readonly components: number[]) {}
  add(vector: Vector): Vector {
    if (vector.components.length !== this.components.length)
      throw new Error("Provided vector is of different length");

    return new Vector(
      vector.components.map((val, idx) => this.components[idx] + val)
    );
  }

  subtract(vector: Vector): Vector {
    if (vector.components.length !== this.components.length)
      throw new Error("Provided vector is of different length");

    return new Vector(
      vector.components.map((val, idx) => this.components[idx] - val)
    );
  }
  dot(vector: Vector): number {
    if (vector.components.length !== this.components.length)
      throw new Error("Provided vector is of different length");
    let product = 0;

    vector.components.forEach(
      (val, idx) => (product += val * this.components[idx])
    );

    return product;
  }
  norm() {
    const total = this.components.reduce((a, c) => a + c ** 2, 0);
    console.log(total);

    return Math.sqrt(total);
  }
  toString() {
    return `(${this.components.join(",")})`;
  }
  equals(vector: Vector) {
    return this.components.every((val, idx) => val === vector.components[idx]);
  }
}

const a = new Vector([1, 2, 3]);
const b = new Vector([2, 3, 4]);

console.log(a.norm());
