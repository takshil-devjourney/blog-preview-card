const card = document.querySelector(".blog-preview-card");

card.addEventListener("mouseenter", () => {
  card.classList.remove("leaving");
  card.classList.add("entering");
});

card.addEventListener("mouseleave", () => {
  card.classList.remove("entering");
  card.classList.add("leaving");
});