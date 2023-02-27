var stickymenu = document.querySelector('.rectangle');

window.addEventListener("scroll", function() {
    if (window.scrollY > 400) {
        stickymenu.style.transition = 'top 1s 0s';
        stickymenu.style.top = '-150px';
    }
});

window.addEventListener("scroll", function() {
    if (window.scrollY < 400) {
        //stickymenu.style.display = 'block';
        stickymenu.style.transition = 'top 1s 0s';
        stickymenu.style.top = '0';
    }
});