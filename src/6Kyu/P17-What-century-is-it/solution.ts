// Return the century of the input year. The input will always be a 4 digit string, so there is no need for validation.

// Examples
// "1999" --> "20th"
// "2011" --> "21st"
// "2154" --> "22nd"
// "2259" --> "23rd"
// "1124" --> "12th"
// "2000" --> "20th"

export class Kata {
  static whatCentury(year: string): string {
    let newYear = year.split("");
    let str = ''
    switch (newYear[1]) {
      case '0': str = `${parseInt(newYear.slice(0, 2).join("")) + 1}st`;
      case '1': str = `${parseInt(newYear.slice(0, 2).join("")) + 1}st`;
      case '2': str = `${parseInt(newYear.slice(0, 2).join("")) + 1}nd`;
      case '3': str = `${parseInt(newYear.slice(0, 2).join("")) + 1}rd`;
      default: str = `${parseInt(newYear.slice(0, 2).join("")) + 1}th`;
    }

    return str;
  }
}

console.log(Kata.whatCentury("2011"));
