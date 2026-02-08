document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.getElementById("openModal");
  const modal = document.querySelector(".modal");

  if (openBtn) {
    openBtn.addEventListener("click", () => {
      modal.style.display = "block";
    });
  }

  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("close-modal")) {
      modal.style.display = "none";
    }

    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
