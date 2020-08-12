function iterativeLog(array, callback) {
  array.forEach(callback);
}

function changeCompletely(element, index, array) {
  console.log(${index}: ${element});
}

var animal = ["dog", "cat", "fish"];
iterativeLog(animal, changeCompletely);
