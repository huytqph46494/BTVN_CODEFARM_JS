function isTriangle(a,b,c){
    if(a<=0 || b<=0 || c<=0){
        return false
    }
    if(a+b<=c) return false;
    if(a+c<=b) return false;
    if(b+c<=a) return false;
    return true;
}

let a = parseFloat(prompt("Nhập a:"));
let b = parseFloat(prompt("Nhập b:"));
let c = parseFloat(prompt("Nhập c:"));

