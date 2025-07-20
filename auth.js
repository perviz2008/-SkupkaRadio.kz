
document.addEventListener("DOMContentLoaded", () => {
  const formContainer = document.getElementById("formContainer");
  const loginTab = document.getElementById("loginTab");
  const registerTab = document.getElementById("registerTab");

  function renderLogin() {
    formContainer.innerHTML = '<input placeholder="Email"><input placeholder="Пароль" type="password"><button>Войти</button>';
  }

  function renderRegister() {
    formContainer.innerHTML = '<input placeholder="Email"><input placeholder="Пароль" type="password"><button>Зарегистрироваться</button>';
  }

  loginTab.addEventListener("click", renderLogin);
  registerTab.addEventListener("click", renderRegister);
  renderLogin();
});
