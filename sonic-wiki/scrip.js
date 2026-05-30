let btnTop = document.querySelector('.move-top');
btnTop.style.display = 'none'
function showBtnTop() {

    let height = window.innerHeight;
    console.log(height + 'height');
    if (window.scrollY > height) {
        btnTop.style.display = 'flex'
    }
    else {
        btnTop.style.display = 'none'
    }
}
window.addEventListener('scroll', showBtnTop);
