//function to determine maximum digits of an element in a array
function getMaxDigit(num) {
  let maxDigit = 0;
  if (num.length === 0) return 1;
  for (let i = 0; i < num.length; i++) {
    maxDigit = Math.max(maxDigit, Math.floor(Math.log10(Math.abs(num[i]))) + 1);
  }
  return maxDigit;
}

//function to get value of a digit
function getValueByDigit(num, digit) {
  if (digit > num.length) return undefined;
  return Math.floor(Math.abs(num) / Math.pow(10, digit)) % 10;
}

// console.log(getMaxDigit([123, 11, 3, 12213213, -8637817239712919]));
console.log(getValueByDigit(221, 4));
