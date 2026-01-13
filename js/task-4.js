const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // зупиняємо стандартну відправку форми (без перезавантаження)

  const { email, password } = form.elements; // отримуємо елементи форми за їх name
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  // перевірка, чи всі поля заповнені
  if (emailValue === "" || passwordValue === "") {
    alert("All form fields must be filled in");
    return; // виходимо, не збираємо обʼєкт
  }

  // збираємо дані у об'єкт
  const formData = {
    email: emailValue,
    password: passwordValue,
  };

  console.log(formData); // виводимо об'єкт у консоль

  form.reset(); // очищаємо форму
});

