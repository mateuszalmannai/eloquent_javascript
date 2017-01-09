function range(start, end, step) {

  var result = [];
  var interval = 1;
  if (step === undefined) {
    for (var i = start; i <= end; i++) {
      result.push(i);
    }
  }
  if (step > 0) {
    for (var i = start; i <= end; i += step) {
      result.push(i);
    }
  } else {
    for (var i = start; i >= end; i += step) {
      result.push(i);
    }
  }
  return result;
}

function sum(input) {
  var result = 0;
  for (var i = 0; i < input.length; i++) {
    result += input[i];
  }
  return result;
}

console.log(range(1, 10));
console.log(sum(range(1, 10)));
console.log(range(1, 10, 2));
console.log(range(5, 2, -1));
