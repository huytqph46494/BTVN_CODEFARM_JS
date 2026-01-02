const students = [
  { id: 1, name: "Nguyễn Văn A", age: 20, city: "Hà Nội" },
  { id: 2, name: "Trần Thị B", age: 19, city: "TP.HCM" },
  { id: 3, name: "Lê Văn C", age: 21, city: "Đà Nẵng" },
];
const table = document.getElementById("dataTable");
let html = `
  <tr>
    <th>ID</th>
    <th>Tên</th>
    <th>Tuổi</th>
    <th>Thành phố</th>
  </tr>
`;
for (let student of students) {
  html += `
    <tr>
      <td>${student.id}</td>
      <td>${student.name}</td>
      <td>${student.age}</td>
      <td>${student.city}</td>
    </tr>
  `;
}
table.innerHTML = html;
table.style.border = "1px solid black";
const ths = table.querySelectorAll("th");
const tds = table.querySelectorAll("td");
ths.forEach((th) => {
  th.style.border = "1px solid black";
  th.style.backgroundColor = "#f2f2f2";
});
tds.forEach((td) => {
  td.style.border = "1px solid black";
});
