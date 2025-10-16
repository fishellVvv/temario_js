const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  document.body.classList.toggle("light");
});

const myInput = document.querySelector("#myInput");
const h2 = document.querySelector("h2");

myInput.addEventListener("input", (ev) => {
  h2.textContent = ev.target.value;
});

window.addEventListener("scroll", () => {
  h2.textContent = window.scrollY;
});

window.addEventListener("resize", (ev) => {
  h2.textContent = `${ev.currentTarget.innerWidth} x ${ev.currentTarget.innerHeight}`;
});

window.addEventListener("DOMContentLoaded", (ev) => {
  if(ev.currentTarget.innerWidth < 600) {
    document.body.innerHTML = `
    <h1>Web no preparada para móviles</h1>
    `
  };
});
