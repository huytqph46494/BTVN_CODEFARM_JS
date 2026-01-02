const savedMode = localStorage.getItem("theme");

if (savedMode) {
  document.body.className = savedMode;
}

function toggleMode() {
  if (document.body.classList.contains("light-mode")) {
    document.body.classList.remove("light_mode");
    document.body.classList.add("dark-mode");
    localStorage.setItem("theme, dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
    document.body.classList.add("light-mode");
    localStorage.setItem("theme, light-mode");
  }
}
