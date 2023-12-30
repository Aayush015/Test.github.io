function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');

}
function fadeoOut(){
    setInterval(loader,3000);
}
window.onload = fadeOut;