import { getRandomColor } from "./utils";

export default function initApp() {
  const body = document.querySelector("body");
  const btn = document.createElement("button");
  btn.className = "button";
  btn.textContent = "Изменить цвет страницы";

  body.append(btn);

  btn.addEventListener("click", function () {
    const color = getRandomColor();
    body.style.backgroundColor = color;
  });
}
