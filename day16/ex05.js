function compressArray(arr) {
  const result = [];
  if (arr.length === 0) return result;
  let current = arr[0];
  let count = 1;

  for (let i = 1; i <= arr.length; i++) {
    if (arr[i] === current) {
      count++;
    } else {
      result.push([current, count]);
      current = arr[i];
      count = 1;
    }
  }
  result.push([current, count]);
  return result;
}

console.log(compressArray(["a", "a", "b", "b", "b", "c"]));

console.log(compressArray([1, 1, 1, 2, 2, 3]));
console.log(compressArray([]));
