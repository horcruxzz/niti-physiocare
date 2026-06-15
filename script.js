// ===== Niti PhysioCare — small site interactions =====

// Appointment form -> pre-filled WhatsApp message
(function () {
  var form = document.getElementById("appointment-form");
  if (!form) return;
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var v = function (id) {
      var el = document.getElementById(id);
      return el && el.value ? el.value.trim() : "";
    };
    var lines = [
      "Hello Niti PhysioCare, I'd like to book an appointment.",
      "",
      "Name: " + v("name"),
      "Email: " + v("email"),
      "Mobile: " + v("tel"),
      "Preferred date: " + v("date"),
    ];
    var msg = v("message");
    if (msg) lines.push("Details: " + msg);
    var number = form.getAttribute("data-whatsapp");
    var url = "https://wa.me/" + number + "?text=" + encodeURIComponent(lines.join("\n"));
    window.open(url, "_blank", "noopener");
  });
})();

// Smooth scroll for in-page anchors (.scrolly and any #hash link)
(function () {
  var header = document.getElementById("header");
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (e) {
      var id = link.getAttribute("href");
      if (id.length < 2) return;
      var target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      var offset = header ? header.offsetHeight : 0;
      var top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: top, behavior: "smooth" });
    });
  });
})();
