function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function findMinMaxAverage(arr) {
  if (arr.length === 0) {
    return {
      max: null,
      maxIndex: null,
      min: null,
      minIndex: null,
      primeAverge: null,
    };
  }
  const max = Math.max(...arr);
  const min = Math.min(...arr);

  const foundMax = arr.find((item) => item === max);
  const foundMin = arr.find((item) => item === min);

  const maxIndex = arr.findIndex((item) => item === max);
  const minIndex = arr.findIndex((item) => item === min);

  const primes = arr.filter(isPrime);

  const primeAverge =
    primes.length > 0
      ? Number((primes.reduce((a, b) => a + b, 0) / primes.length).toFixed(2))
      : null;

  return { max: foundMax, maxIndex, min: foundMin, minIndex, primeAverge };
}

console.log(findMinMaxAverage([3, 1, 4, 1, 5, 9, 2, 6]));

console.log(findMinMaxAverage([5, 5, 2, 2, 1]));
console.log(findMinMaxAverage([-3, 7, -8, 11, 0]));
