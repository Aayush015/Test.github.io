// JavaScript Document for preloader
function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');

}
function fadeOut(){
    setInterval(loader,10);
}
window.onload = fadeOut;