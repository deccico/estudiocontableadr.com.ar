(function () {
  "use strict";

  // Menú en pantallas chicas
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");

  function setMenu(open) {
    toggle.setAttribute("aria-expanded", String(open));
    nav.classList.toggle("is-open", open);
    toggle.querySelector(".nav-toggle-label").textContent = open ? "Cerrar" : "Menú";
  }

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      setMenu(toggle.getAttribute("aria-expanded") !== "true");
    });

    nav.addEventListener("click", function (event) {
      if (event.target.closest("a")) setMenu(false);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        setMenu(false);
        toggle.focus();
      }
    });

    var wide = window.matchMedia("(min-width: 920px)");
    if (wide.addEventListener) {
      wide.addEventListener("change", function (event) {
        if (event.matches) setMenu(false);
      });
    }
  }

  // Borde del encabezado al hacer scroll
  var header = document.querySelector(".site-header");
  function onScroll() {
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  }
  if (header) {
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  // Botón flotante de WhatsApp: se oculta cuando ya hay otro botón a la vista
  var fab = document.querySelector(".wa-float");
  if (fab) {
    if ("IntersectionObserver" in window) {
      var inView = new Set();
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) inView.add(entry.target);
          else inView.delete(entry.target);
        });
        fab.classList.toggle("is-visible", inView.size === 0);
      });
      document.querySelectorAll("[data-hide-fab]").forEach(function (el) {
        observer.observe(el);
      });
    } else {
      fab.classList.add("is-visible");
    }
  }

  // Año actual en el pie
  var year = document.querySelector("[data-year]");
  if (year) year.textContent = String(new Date().getFullYear());
})();
