const number = [4, 2, 7, 6, 5, 8, 2, 1];
function sortArrNumber(arr) {
  const result = [...arr];
  const n = result.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (result[j] > result[j + 1]) {
        const temp = result[j];
        result[j] = result[j + 1];
        result[j + 1] = temp;
      }
    }
  }
  return result;
}

// Output:
const result = sortArrNumber(number);
console.log(result); // [1,2,2,4,5,6,7,8]
