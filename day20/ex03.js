const users = [
  { fullName: "Nguyễn Minh Hoàng" },
  { fullName: "Nguyễn Đức Hoàng" },
  { fullName: "Lê Văn" },
  { fullName: "Lê Văn Tình" },
  { fullName: "Lê Nin" },
];

function splitVietnameseName(fullName) {
  const parts = fullName.trim().split(/\s+/);
  const name = parts[parts.length - 1];
  const lastName = parts.slice(0, -1).join(" ");
  return { name, lastName };
}

function sortUsersByName(users) {
  return [...users].sort((a, b) => {
    const aName = splitVietnameseName(a.fullName);
    const bName = splitVietnameseName(b.fullName);

    const nameCompare = aName.name.localeCompare(bName.name, "vi");
    if (nameCompare !== 0) {
      return nameCompare;
    }
    return aName.lastName.localeCompare(bName.lastName, "vi");
  });
}
const result = sortUsersByName(users);
console.log(result);
