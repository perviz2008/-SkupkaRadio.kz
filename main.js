
// Тема
document.getElementById("theme-toggle").onclick = () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
};
if (localStorage.getItem("theme") === "dark") document.body.classList.add("dark");

// Язык
document.getElementById("lang-toggle").onclick = () => {
  const current = localStorage.getItem("lang") || "ru";
  const next = current === "ru" ? "kz" : "ru";
  localStorage.setItem("lang", next);
  location.reload();
};

// Избранное и корзина
let favCount = localStorage.getItem("favorites")?.split(",").length || 0;
let cartCount = localStorage.getItem("cart")?.split(",").length || 0;
document.getElementById("fav-count").textContent = favCount;
document.getElementById("cart-count").textContent = cartCount;
