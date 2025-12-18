// Input:
const arrayString = ["name:John", "age:30", "city:NY"];

function convertArrayToObject(array) {
  return array.reduce((acc, item) => {
    const [key, value] = item.split(":");
    acc[key] = value;
    return acc;
  }, {});
}

// Output:
console.log(convertArrayToObject(arrayString)); // { name: 'John', age: '30', city: 'NY' }
