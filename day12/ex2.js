function swapNumber(a,b){
    a =a^b;
    b =a^b;
    a =a^b;
    return `${a} ${b}`
}

let a = parseFloat(prompt("Nhập a:"));
let b = parseFloat(prompt("Nhập b:"));
alert("Kết quả sau khi hoán vị a và b là: "+swapNumber(a,b))