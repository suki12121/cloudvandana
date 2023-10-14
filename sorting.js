const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter numbers separated by spaces: ", (input) => {
  const inputArray = input.split(" ").map(Number);

  if (isValidArray(inputArray)) {
    const sortedArray = sortArrayDescending(inputArray);
    console.log("Sorted array in descending order: " + sortedArray);
  } else {
    console.log("Invalid input. Please enter numbers separated by spaces.");
  }

  rl.close();
});

function isValidArray(arr) {
  return arr.every((item) => !isNaN(item));
}

function sortArrayDescending(arr) {
  return arr.sort((a, b) => b - a);
}
