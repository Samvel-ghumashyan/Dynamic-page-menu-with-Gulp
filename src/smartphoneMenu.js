var samrtphoneMenu = document.querySelector('#smartphone-menu');
var hamburgMenu = document.querySelector('.hamburgMenuInLeft');
var xcloseButton = document.querySelector('.xCloseButton')

    samrtphoneMenu.addEventListener('click', function (){
        hamburgMenu.style.transition = 'left 0.5s 0s';
        hamburgMenu.style.left = '8px';
})


xcloseButton.addEventListener("click", function() {
    hamburgMenu.style.transition = 'left 0.5s 0s';
    hamburgMenu.style.left = '-205px';
});
