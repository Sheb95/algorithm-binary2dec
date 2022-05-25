let userInput = '101010101';
let strIndex = [];

//store char index in array
for (let i = 0; i < userInput.length; i++) {
  strIndex.push(i);
}

//reverse char index array
const reversed = strIndex.reverse();

console.log(reversed);

sum = 0;
for (let i = 0; i < reversed.length; i++) {
  if (userInput[i] !== '0') {
    sum += 2 ** reversed[i];
  }
}

console.log(sum);
