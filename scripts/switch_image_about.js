// JavaScript to switch images every 5 seconds
const images = document.querySelectorAll('.about .row .image img');
let currentIndex = 0;

function switchImage() {
    images[currentIndex].style.opacity = 0; // Hide current image
    currentIndex = (currentIndex + 1) % images.length; // Move to the next image (loop back to first image)
    images[currentIndex].style.opacity = 1; // Show the next image
}

// Change the image every 5 seconds
setInterval(switchImage, 5000);
