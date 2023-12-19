document.addEventListener("DOMContentLoaded", function() {
  function loader() {
      document.querySelector('.loader-container').classList.add('fade-out');
  }

  function fadeOut() {
      // Set a timer for 2000 milliseconds (2 seconds) before calling loader
      setTimeout(loader, 2000);
  }

  // Call fadeOut immediately after DOMContentLoaded
  fadeOut();
  
  // Listen for the transitionend event to remove the loader after the fade-out transition is complete
  document.querySelector('.loader-container').addEventListener('transitionend', function() {
      document.querySelector('.loader-container').style.display = 'none';
  });
});
