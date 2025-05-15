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

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem(
      "theme",
      document.body.classList.contains("dark-mode") ? "dark" : "light"
    );
    updateButtonText();
  });
});
document
  .querySelector(".mobile-menu-btn")
  ?.addEventListener("click", function () {
    document.querySelector("nav ul")?.classList.toggle("active");
  });
