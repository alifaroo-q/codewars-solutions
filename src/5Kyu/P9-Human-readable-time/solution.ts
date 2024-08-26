// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

export class Kata {
  static readableTime(seconds: number) {
    let [hour, minute, second]: number[] | string[] = [0, 0, 0];

    hour = Math.floor(seconds / 3600);
    minute = Math.floor((seconds % 3600) / 60);
    second = Math.floor(seconds % 60);

    if (hour <= 9) hour = 0 + hour.toString();
    if (minute <= 9) minute = 0 + minute.toString();
    if (second <= 9) second = 0 + second.toString();

    return `${hour}:${minute}:${second}`;
  }
}

console.log(Kata.readableTime(5));
