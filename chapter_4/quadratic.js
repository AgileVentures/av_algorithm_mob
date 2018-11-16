// function hasDuplicateValue(array) {
//   var steps = 0;
//   for (var i = 0; i < array.length; i++) {
//     for (var j = 0; j < array.length; j++) {
//       steps++;
//       if (i !== j && array[i] == array[j]) {
//         return true;
//       }
//     }
//   }
//   console.log(steps);
//   return false;
// }


function hasDuplicateValue(array) {
  var existingNumbers = {};
  var steps = 0;
  for (var i = 0; i < array.length; i++) {
    steps++;
    console.log("array[i]:", array[i]);
    if (existingNumbers[array[i]] === undefined) {
      existingNumbers[array[i]] = 'exists';
      console.log("existingNumbers:", existingNumbers);
    } else {
      return true;
    }
  }
  console.log(steps);
  return false;
}

console.log(hasDuplicateValue([3,5,1,6,9,2]));