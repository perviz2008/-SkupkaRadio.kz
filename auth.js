
document.getElementById('loginTab').onclick = function () {
  document.getElementById('loginForm').classList.add('active');
  document.getElementById('registerForm').classList.remove('active');
  this.classList.add('active');
  document.getElementById('registerTab').classList.remove('active');
};
document.getElementById('registerTab').onclick = function () {
  document.getElementById('loginForm').classList.remove('active');
  document.getElementById('registerForm').classList.add('active');
  this.classList.add('active');
  document.getElementById('loginTab').classList.remove('active');
};

function togglePassword(id) {
  const field = document.getElementById(id);
  field.type = field.type === 'password' ? 'text' : 'password';
}
