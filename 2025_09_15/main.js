const themeBtn = document.querySelector("#themeBtn");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeBtn.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    themeBtn.textContent = "🌑";
    localStorage.setItem("theme", "light");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("theme")) {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.body.classList.add("dark");
      themeBtn.textContent = "☀️";
    }
  }
});

/*
localStorage.setItem("theme", "light");
console.log(localStorage.getItem("theme"));
localStorage.removeItem("theme");
localStorage.clear();
*/
