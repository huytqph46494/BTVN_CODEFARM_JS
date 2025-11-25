function printChrismasTree(n, character){
    if(!Number.isInteger(n) ||n<=0||n>=100){
        console.log("n ko phai la so duong nho hon 100")
        return
    }
    if(typeof character!=="string" ||character.length!==1){
        console.log("character phai la 1 ki tu duy nhat")
        return
    }

    for(let i=1;i<=n;i++){
        let row=""
        for(let j=1;j<=n-i;j++){
            row+=" ";
        }
        for(let j =1;j<=2*i-1;j++){
            row+=character
        }
        console.log(row)
    }
    let trunk = " ".repeat(n-1)+character
    console.log(trunk)
}

printChrismasTree(5, "*");
printChrismasTree(5,"o")