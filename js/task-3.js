const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", () => {
  // Обрізаємо пробіли по краях
  const name = input.value.trim();

  // Якщо порожньо — показуємо "Anonymous", інакше — введене ім'я
  output.textContent = name === "" ? "Anonymous" : name;
});

