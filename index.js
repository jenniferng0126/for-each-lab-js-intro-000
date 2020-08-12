function iterativeLog(array) {
  function changeCompletely(element, index, array) {
    console.log(${index} + ": " + ${element});
  }

  array.forEach(changeCompletely);
}

var animal = ["dog", "cat", "fish"];
iterativeLog(animal, changeCompletely);
