function printSquareNumber(n){
    let result = []
    for(i=2;i*i<=n;i++){
        console.log(i*i)
    }
    console.log(result.join(' '))
}

console.log(printSquareNumber(10));
console.log(printSquareNumber(20));