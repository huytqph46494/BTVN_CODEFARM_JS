function sortNumber(a, b, c){
    if(a>b){
        a = a + b;
        b = a - b;
        a = a - b;
    }
    if(a>c){
        a = a + c;
        c = a - c;
        a = a - c;
    }
    if(b>c){
        b = b + c;
        b = b - c;
        b = b - c;
    }
    return `${a} ${b} ${c}`
}

let a = parseFloat(prompt("Nhập a:"));
let b = parseFloat(prompt("Nhập b:"));
let c = parseFloat(prompt("Nhập c:"));

alert("Thứ tự tăng dần của 3 số a, b, c là: "+sortNumber(a,b,c))