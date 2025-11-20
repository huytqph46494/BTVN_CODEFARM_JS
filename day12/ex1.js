let weight = parseFloat(prompt("Nhập cân nặng (kg):"));
let height = parseFloat(prompt("Nhập chiều cao (m):"));

alert(calcBMI(weight, height));

function calcBMI(weight, height) {
  let bmi = weight / (height * height);

  bmi = bmi.toFixed(2);

  let tinhtrang = "";

  if (bmi < 18.5) {
    tinhtrang = "Thiếu cân";
  } else if (18.5 <= bmi < 23) {
    tinhtrang = "Bình thường";
  } else if (23 <= bmi < 25) {
    tinhtrang = "Thừa cân";
  } else {
    tinhtrang = "Béo phì";
  }
  return `BMI = ${bmi}, ${tinhtrang}`;
}
