const arr = [1, [2, 3], [4, [5, 6, [7]]], 8];
function deepCount(array) {
  const stack = [...array];
  let count = 0;
  while (stack.length > 0) {
    const item = stack.pop();
    if (Array.isArray(item)) {
      stack.push(...item);
    } else {
      count = [item].reduce((acc) => acc + 1, count);
    }
  }
  return count;
}
console.log(deepCount(arr));
