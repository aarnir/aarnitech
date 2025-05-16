document.addEventListener("DOMContentLoaded", () => {
  // Service toggle
  function toggleService(card) {
    const details = card.querySelector(".service-details");
    if (details.style.display === "block") {
      details.style.display = "none";
    } else {
      details.style.display = "block";
    }
  }

  // Dark mode toggle
  const toggleBtn = document.getElementById("darkModeToggle");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  function updateButtonText() {
    toggleBtn.textContent = document.body.classList.contains("dark-mode")
      ? "Valoisa tila"
      : "Pimeä tila";
  }

  if (
    localStorage.getItem("theme") === "dark" ||
    (!localStorage.getItem("theme") && prefersDark)
  ) {
    document.body.classList.add("dark-mode");
  }

  updateButtonText();
  updateLogo();

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem(
      "theme",
      document.body.classList.contains("dark-mode") ? "dark" : "light"
    );
    updateButtonText();
    updateLogo();
  });
  function updateLogo() {
    const logo = document.getElementById("siteLogo");
    if (!logo) return;

    logo.src = document.body.classList.contains("dark-mode")
      ? "images/logo-light.png" // now used in dark mode
      : "images/logo-dark.png"; // used in light mode
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".mobile-menu-btn");
  const navMenu = document.getElementById("nav-menu");

  menuBtn?.addEventListener("click", () => {
    navMenu?.classList.toggle("active");
  });

  // Close menu when any link is clicked
  document.querySelectorAll("#nav-menu a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu?.classList.remove("active");
    });
  });
});
