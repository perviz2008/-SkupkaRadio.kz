// LocalStorage Auth System

function saveUser(email, password) {
  localStorage.setItem("user:" + email, password);
}

function getUserPassword(email) {
  return localStorage.getItem("user:" + email);
}

function register() {
  const email = document.getElementById("registerEmail").value;
  const password = document.getElementById("registerPassword").value;
  if (email && password) {
    saveUser(email, password);
    alert("Регистрация успешна!");
  }
}

function login() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;
  if (getUserPassword(email) === password) {
    localStorage.setItem("loggedIn", email);
    window.location.href = "index.html";
  } else {
    alert("Неверные данные");
  }
}

function logout() {
  localStorage.removeItem("loggedIn");
  window.location.href = "auth.html";
}

function checkAuth() {
  if (!localStorage.getItem("loggedIn")) {
    window.location.href = "auth.html";
  } else {
    const user = localStorage.getItem("loggedIn");
    const display = document.getElementById("userEmailDisplay");
    if (display) display.innerText = "Вы вошли как: " + user;
  }
}

// Password reset logic
let resetCode = "";
let resetEmail = "";

function sendResetCode() {
  const email = document.getElementById("resetEmail").value;
  if (getUserPassword(email)) {
    resetCode = Math.floor(1000 + Math.random() * 9000).toString();
    resetEmail = email;
    document.getElementById("showCode").innerText = resetCode;
    document.getElementById("resetStage1").classList.add("hidden");
    document.getElementById("resetStage2").classList.remove("hidden");
  } else {
    alert("Пользователь не найден!");
  }
}

function verifyResetCode() {
  const enteredCode = document.getElementById("enteredCode").value;
  if (enteredCode === resetCode) {
    document.getElementById("resetStage2").classList.add("hidden");
    document.getElementById("resetStage3").classList.remove("hidden");
  } else {
    alert("Неверный код!");
  }
}

function resetPassword() {
  const newPass = document.getElementById("newPassword").value;
  const confirm = document.getElementById("confirmPassword").value;
  if (newPass && newPass === confirm) {
    saveUser(resetEmail, newPass);
    document.getElementById("resetStage3").classList.add("hidden");
    document.getElementById("resetStage4").classList.remove("hidden");
  } else {
    alert("Пароли не совпадают!");
  }
}