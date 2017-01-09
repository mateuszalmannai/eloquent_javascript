  var list = {
    value: 1,
    rest: {
      value: 2,
      rest: {
        value: 3,
        rest: null
      }
    }
  }

  var anotherList = {
    value: 0,
    rest: list
  }

  var yetAnotherList = {
    value: -1,
    rest: list
  }

  function arrayToList(array) {
    var list = null;
    for (i = array.length - 1; i >= 0; i--) {
      list = {
        value: array[i],
        rest: list
      };
    }
    return list;
  }

  /*
    Every iteration of the loop, node points to the current sublist
    and the body can read its value property to get the current element.
    At the end of an iteration, node moves to the next sublist, When that 
    is null, we have reached the end of the list and the loop is finished.
  */
  function listToArray(list) {
    var array = [];
    for (var node = list; node; node = node.rest)
      array.push(node.value);
    return array;

  }

  function prepend(value, list) {
    return {
      value: value,
      rest: list
    };
  }

  /*
    The recursive version of nth looks at an ever smaller part of the 'tail' of the list
    and at the same time counts down the index until it reaches zero, at which point it 
    can return the value property of the node it is looking at. 
    To get the zeroeth element of a list, you simply take the value property of its head node.
    To get element N + 1, you take the Nth element of the list that's in this list's rest property.
  */
  function nth(list, number) {
    if (!list) return undefined;
    else if (number == 0) return list.value;
    else return nth(list.rest, number - 1);
  }

  console.log(arrayToList([10, 20]));
  console.log(listToArray(arrayToList([10, 20, 30])));
  console.log(prepend(10, prepend(20, null)));
  console.log(nth(arrayToList([10, 20, 30]), 1));
