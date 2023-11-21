const morseCodeDict = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
  1: ".----",
  2: "..---",
  3: "...--",
  4: "....-",
  5: ".....",
  6: "-....",
  7: "--...",
  8: "---..",
  9: "----.",
  0: "-----",
  " ": "/", // Represent space with '/'
};

export function textToMorse(text) {
  return text
    .toUpperCase()
    .split("")
    .map((char) => morseCodeDict[char] || "")
    .join(" ");
}

export function morseToText(morse) {
  return morse
    .split(" ")
    .map(
      (code) =>
        Object.keys(morseCodeDict).find((key) => morseCodeDict[key] === code) ||
        ""
    )
    .join("");
}
