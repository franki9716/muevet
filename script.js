// Suavizar scroll al hacer clic en enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(function (a) {
  a.addEventListener("click", function (e) {
    var id = this.getAttribute("href");
    if (id === "#") return;
    var el = document.querySelector(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});
