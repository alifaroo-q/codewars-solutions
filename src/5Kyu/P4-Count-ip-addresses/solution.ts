// Implement a function that receives two IPv4 addresses, and returns the number of addresses between them (including the first one, excluding the last one).

// All inputs will be valid IPv4 addresses in the form of strings. The last address will always be greater than the first one.

// Examples
// * With input "10.0.0.0", "10.0.0.50"  => return   50
// * With input "10.0.0.0", "10.0.1.0"   => return  256
// * With input "20.0.0.10", "20.0.1.0"  => return  246

export class Kata {
  static ipsBetween(start: string, end: string) {
    const newEnd = end.split(".");
    const newStart = start.split(".");

    let endTotal = 0;

    for (let a of newEnd) {
      endTotal = (endTotal + parseInt(a)) * 256;
    }

    let startTotal = 0;

    for (let a of newStart) {
      startTotal = (startTotal + parseInt(a)) * 256;
    }

    return (endTotal - startTotal) / 256;
  }
}

console.log(Kata.ipsBetween("0.0.0.0", "255.255.255.255"));
