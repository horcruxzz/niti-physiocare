// ===== [CLINIC NAME] — small site interactions =====

// Mobile nav toggle
(function () {
  var toggle = document.querySelector(".nav-toggle");
  var menu = document.getElementById("nav-menu");
  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var open = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    // Close menu after clicking a link (mobile)
    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        menu.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }
})();

// Auto-update footer year
(function () {
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
