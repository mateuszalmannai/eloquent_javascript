function countBs(inputString) {
  result = 0;
  for (var i = 0; i < inputString.length; i++) {
    if (inputString.charAt(i) == "B")
      result += 1;
  }
  return result;
}

function countChars(inputString, character) {
  result = 0;
  for (var i = 0; i < inputString.length; i++) {
    if (inputString.charAt(i) == character)
      result += 1;
  }
  return result;
}

console.log(countBs("BBC"));
console.log(countChars("kakkerlak", "k"));
