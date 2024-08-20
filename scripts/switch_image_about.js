const images = document.querySelectorAll('.about .row .image img');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let currentIndex = 0;

function showImage(index) {
    images.forEach((img, i) => {
        img.style.opacity = i === index ? 1 : 0;
    });
}

// Navigate to the next image
function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

// Navigate to the previous image
function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

// Event listeners for arrow clicks
next.addEventListener('click', nextImage);
prev.addEventListener('click', prevImage);

// Auto-switch images every 10 seconds
setInterval(nextImage, 10000);
