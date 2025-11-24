function printPrimeNumber(n){
    if(n<2){
        console.log("ko co so nguyen to nao")
        return
    }
    function isPrime(num){
        if(num<2) return false
        if(num === 2) return true
        if(num%2===0) return false

        for(let i=3;i<Math.sqrt(num);i+=2){
            if(num%i===0){
                return false
            }
        }
        return true
    }
    let result = []
    for(let i=2;i<=n;i++){
        if(isPrime(i)){
            result.push(i)
        }
    }
    if(result.length>0){
        console.log(result.join(" "))
    }else{
        console.log("ko co so nguyen to nao")
    }
}


printPrimeNumber(10); // 2 3 5 7)