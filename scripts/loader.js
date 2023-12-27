function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');

}
function fadeoOut(){
    setInterval(loader,5000);
}
window.onload = fadeOut;