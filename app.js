function toggleDarkMode() {
  document.body.classList.toggle('dark');
}

function sendResetCode() {
  document.getElementById("reset-step1").classList.add("hidden");
  document.getElementById("reset-step2").classList.remove("hidden");
  alert("Код отправлен на почту: 1234");
}

function verifyCode() {
  const code = document.getElementById("reset-code").value;
  if (code === "1234") {
    document.getElementById("reset-step2").classList.add("hidden");
    document.getElementById("reset-step3").classList.remove("hidden");
  } else {
    alert("Неверный код");
  }
}

function confirmReset() {
  alert("Пароль изменен. Вернитесь ко входу.");
  window.location.href = "login.html";
}