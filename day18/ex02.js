const logs = [
  { user: "A", action: "login", time: "2024-01-01" },
  { user: "B", action: "login", time: "2024-01-01" },
  { user: "A", action: "logout", time: "2024-01-02" },
  { user: "A", action: "purchase", time: "2024-01-02" },
  { user: "C", action: "login", time: "2024-01-01" },
];
const result = logs.reduce((acc, log) => {
  const { time, action } = log;
  if (!acc[time]) {
    acc[time] = { login: 0, purchase: 0, logout: 0 };
  }

  acc[time][action]++;
  return acc;
}, {});
console.log(result);
