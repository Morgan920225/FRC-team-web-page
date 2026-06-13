/* FRC 7130 Future Shock — language toggle + nav highlight */
(function () {
  var saved = null;
  try { saved = localStorage.getItem("fs-lang"); } catch (e) {}
  if (saved === "zh") document.body.classList.add("zh");

  var btn = document.getElementById("langBtn");
  function label() {
    btn.textContent = document.body.classList.contains("zh") ? "EN / 中文 ✓" : "EN ✓ / 中文";
  }
  if (btn) {
    label();
    btn.addEventListener("click", function () {
      document.body.classList.toggle("zh");
      try { localStorage.setItem("fs-lang", document.body.classList.contains("zh") ? "zh" : "en"); } catch (e) {}
      label();
    });
  }

  // highlight current page in nav
  var here = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("nav.main a").forEach(function (a) {
    var target = a.getAttribute("href").split("/").pop();
    if (target === here) a.classList.add("active");
  });
})();
