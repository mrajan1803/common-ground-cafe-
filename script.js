
/* =========================================
   COMMON GROUND — WEBSITE INTERACTIONS
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {
  // Automatically update the footer year.
  const yearElement = document.getElementById("year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Mobile navigation.
  const menuToggle = document.querySelector(".menu-toggle");
  const mainNav = document.querySelector(".main-nav");

  if (menuToggle && mainNav) {
    const closeMenu = () => {
      mainNav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation");
    };

    menuToggle.addEventListener("click", () => {
      const isOpen = mainNav.classList.toggle("is-open");

      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation" : "Open navigation"
      );
    });

    mainNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 700) {
        closeMenu();
      }
    });
  }

  // Newsletter demo form.
  // This does not save or send email addresses.
  const newsletterForm = document.getElementById("newsletter-form");
  const formMessage = document.getElementById("form-message");
  const emailInput = document.getElementById("email");

  if (newsletterForm && formMessage && emailInput) {
    newsletterForm.addEventListener("submit", (event) => {
      event.preventDefault();

      if (!emailInput.checkValidity()) {
        emailInput.reportValidity();
        return;
      }

      formMessage.textContent =
        "Thanks for stopping by! This demo form isn't connected yet.";

      emailInput.value = "";
    });
  }
});
