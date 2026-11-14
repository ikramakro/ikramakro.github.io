(function () {
  var btn = document.querySelector(".menu-btn");
  var links = document.getElementById("nav-links");
  if (btn && links) {
    btn.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        links.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
      });
    });
  }
  var today = new Date().getDay();
  document.querySelectorAll(".hours-row[data-day]").forEach(function (row) {
    if (row.getAttribute("data-day") === String(today)) row.classList.add("today");
  });
})();
