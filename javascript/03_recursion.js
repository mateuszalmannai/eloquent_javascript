function isEven(number) {
  var result = false;
  if (number == 0)
    result = true;
  else if (number == 1)
    result = false;
  else if (number < 0)
    result = isEven(-number);
  else
    result = isEven(number - 2);

  return result;
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
