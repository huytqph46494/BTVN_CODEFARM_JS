async function fetchUsers() {
  try {
    const reponse = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await reponse.json();
    const filteredUsers = users.filter((user) => user.id > 5);
    const userNames = filteredUsers.map((user) => user.name);
    console.log(userNames);
    const ul = document.createElement("li");
    li.textContent = name;
    ul.appendChild(li);
  } catch (error) {
    console.log("Loi goi API", error);
  }
}
fetchUsers();
