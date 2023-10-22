// A dictionary that maps characters to Morse code
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
};

// Function to convert text to Morse code
export function textToMorse(text) {
  return text
    .toUpperCase() // Convert input to uppercase
    .split("") // Split the text into characters
    .map((char) => {
      if (char === " ") {
        return " "; // Preserve spaces
      } else if (morseCodeDict[char]) {
        return morseCodeDict[char];
      } else {
        return ""; // Ignore characters not in the dictionary
      }
    })
    .join(" "); // Join characters with a space
}

// Function to convert Morse code to text
export function morseToText(morse) {
  return morse
    .split(" ")
    .map((code) => {
      if (code === " ") {
        return " "; // Preserve spaces
      } else {
        for (const char in morseCodeDict) {
          if (morseCodeDict[char] === code) {
            return char;
          }
        }
        return ""; // Ignore invalid Morse code
      }
    })
    .join("");
}
