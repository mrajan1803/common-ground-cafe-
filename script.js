
document.addEventListener("DOMContentLoaded", function () {
  // Keep the copyright year current.
  document.querySelectorAll(".year").forEach(function (element) {
    element.textContent = new Date().getFullYear();
  });

  // Mobile navigation.
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav-links");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      const isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.textContent = isOpen ? "×" : "☰";
      toggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation" : "Open navigation"
      );
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.textContent = "☰";
        toggle.setAttribute("aria-label", "Open navigation");
      });
    });
  }

  // Demo newsletter response. This does not subscribe or save email addresses.
  const newsletterForm = document.querySelector(".newsletter-form");
  const message = document.querySelector(".form-message");

  if (newsletterForm && message) {
    newsletterForm.addEventListener("submit", function (event) {
      event.preventDefault();
      message.textContent =
        "Thanks for stopping by! Newsletter sign-up is not connected yet.";
      newsletterForm.reset();
    });
  }
});
