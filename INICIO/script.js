const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const carouselImages = document.querySelector(".carousel-images");

let currentIndex = 0;

function showImage(index) {
    carouselImages.style.transform = `translateX(-${index * 100}%)`;
}

prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + carouselImages.children.length) % carouselImages.children.length;
    showImage(currentIndex);
});
nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % carouselImages.children.length;
    showImage(currentIndex);
});

showImage(currentIndex);


