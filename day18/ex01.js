const nums = [1, 2, 3, 10, 11, 12, 13, 15, 16];
const longest = nums.reduce(
  (acc, num, index, arr) => {
    if (index === 0) {
      acc.current = [num];
      acc.best = [num];
      return acc;
    }
    if (num === arr[index - 1] + 1) {
      acc.current.push(num);
    } else {
      acc.current = [num];
    }
    if (acc.current.length > acc.best.length) {
      acc.best = [...acc.current];
    }
    return acc;
  },
  { current: [], best: [] }
);
console.log(longest.best);
