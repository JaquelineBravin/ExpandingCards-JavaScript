const elementImage = document.querySelectorAll(".image");

elementImage.forEach((image) => {
  image.addEventListener("click", () => {
    removeActiveClasses();
    image.classList.add("active");
  });
});

function removeActiveClasses() {
  elementImage.forEach((image) => {
    image.classList.remove("active");
  });
}
