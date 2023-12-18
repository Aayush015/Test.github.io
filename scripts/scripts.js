function loader() {
  document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut() {
  // Set a timer for 3000 milliseconds (3 seconds) before calling loader
  setTimeout(loader, 10000);
}

window.onload = fadeOut;
