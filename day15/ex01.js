function findNearest(arr, x){
    let nearest = arr[0]
    let minDiff = Math.abs(arr[0]-x)

    for(let i =1 ; i<arr.length; i ++){
        const diff = Math.abs(arr[i] - x)
        if(diff<minDiff){
            minDiff = diff;
            nearest = arr[i]
        }
    }
    return nearest
}
const numbers = [2,15,30,55,60,77,90]

console.log(findNearest(numbers,58))
console.log(findNearest(numbers, 57));
console.log(findNearest(numbers, 80));