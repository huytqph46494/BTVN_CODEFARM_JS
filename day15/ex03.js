function insertNumber(arr, num) {
  const cleanArr = [];
  for (let i = 0; i < arr.length; i++) {
    const val = arr[i];
    if (typeof val === "number" && !Number.isNaN(val)) {
      cleanArr.push(val);
    }
  }


  if (typeof num !== "number" || Number.isNaN(num)) {

    bubbleSort(cleanArr);
    return cleanArr;
  }


  if (cleanArr.length === 0) {
    return [num];
  }


  bubbleSort(cleanArr);


  let inserted = false;
  for (let i = 0; i < cleanArr.length; i++) {
    if (num < cleanArr[i]) {
      cleanArr.splice(i, 0, num);
      inserted = true;
      break;
    }
  }


  if (!inserted) {
    cleanArr.push(num);
  }

  return cleanArr;
}


function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}


console.log(insertNumber([1, 3, 5, 7, 9], 6));

console.log(insertNumber([3, "hello", 1, NaN, 4, null], 2));

console.log(insertNumber([], 5));

console.log(insertNumber([-1, 10, -5, "abc"], -3));

console.log(insertNumber([5, 2, 8], NaN));

