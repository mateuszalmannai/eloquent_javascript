function reverseArray(array) {
  var result = [];
  for (i = 0; i < array.length; i++) {
    result.unshift(array[i]);
  }
  return result;
}

function reverseArrayInPlace(array) {
  for (i = 0; i < Math.floor(array.length / 2); i++) {
    var temp = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = temp;
  }
  return array;
}

var arrayValue = [1, 2, 3, 4, 5];
console.log(reverseArray(arrayValue));
console.log(reverseArray(["A", "B", "C"]));
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
