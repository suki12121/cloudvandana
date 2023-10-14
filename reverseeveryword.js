const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter a sentence: ", (sentence) => {
  const reversedSentence = reverseWordsInSentence(sentence);
  console.log("Reversed sentence: " + reversedSentence);
  rl.close();
});

function reverseWordsInSentence(sentence) {
  // Split the sentence into words
  const words = sentence.split(" ");

  // Reverse each word and store them in an array
  const reversedWords = words.map((word) => reverseWord(word));

  // Join the reversed words to form the reversed sentence
  const reversedSentence = reversedWords.join(" ");

  return reversedSentence;
}

function reverseWord(word) {
  // Split the word into characters, reverse them, and join back into a word
  return word.split("").reverse().join("");
}
