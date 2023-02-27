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
function linesfunc (){
    var demosLinks = "<ul id='ulForLine-1' class='open-menu' ><li id='li-1' class='menuLines1' disabled >Demos-1</li><li id='li-2' class='menuLines1'>Demos-2</li><li id='li-3' class='menuLines1'>Demos-3</li><li id='li-4' class='menuLines1'>Demos-4</li><li id='li-5' class='menuLines1'>Demos-5</li></ul>";
    var postLinks = "<ul id='ulForLine-2' class='open-menu' style='left: 365px;'><li id='li-6' class='menuLines2'>Post-1</li><li id='li-7' class='menuLines2'>Post-2</li><li id='li-8' class='menuLines2'>Post-3</li><li id='li-9' class='menuLines2'>Post-4</li><li id='li-10' class='menuLines2'>Post-5</li></ul>";
    var featureLinks = "<ul id='ulForLine-3' class='open-menu' style='left: 475px;'><li id='li-11' class='menuLines3'>Feature-1</li><li id='li-12' class='menuLines3'>Feature-2</li><li id='li-13' class='menuLines3'>Feature-3</li><li id='li-14' class='menuLines3'>Feature-4</li><li id='li-15' class='menuLines3'>Feature-5</li></ul>";
    var categoryLinks = "<ul id='ulForLine-4' class='open-menu' style='left: 630px;'><li id='li-16' class='menuLines4'>Category-1</li><li id='li-17' class='menuLines4'>Category-2</li><li id='li-8' class='menuLines4'>Category-3</li><li id='li-19' class='menuLines4'>Category-4</li><li id='li-20' class='menuLines4'>Category-5</li></ul>";
    var shopLinks = "<ul id='ulForLine-5' class='open-menu' style='left: 805px;'><li id='li-21' class='menuLines5'>Shop-1</li><li id='li-22' class='menuLines5'>Shop-2</li><li id='li-23' class='menuLines5'>Shop-3</li><li id='li-24' class='menuLines5'>Shop-4</li><li id='li-25' class='menuLines5'>Shop-5</li></ul>";
    var buyNowLinks = "<ul id='ulForLine-6' class='open-menu' style='left: 920px;'><li id='li-26' class='menuLines6'>BuyNow-1</li><li id='li-27' class='menuLines6'>BuyNow-2</li><li id='li-28' class='menuLines6'>BuyNow-3</li><li id='li-29' class='menuLines6'>BuyNow-4</li><li id='li-30' class='menuLines6'>BuyNow-5</li></ul>";

    var menuListObj = {
        demosLinks: ['ulForLine-1', demosLinks],
        postLinks: ['ulForLine-2', postLinks],
        featureLinks: ['ulForLine-3', featureLinks],
        categoryLinks: ['ulForLine-4', categoryLinks],
        shopLinks: ['ulForLine-5', shopLinks],
        buyNowLinks: ['ulForLine-6', buyNowLinks],
    }

        return menuListObj;
    }
var opMenCont = document.querySelector('.op-menu-cont');
var openMenuLInes = null;
var activatedID = null;
var activatedEl = null;

var menu = document.querySelector('.menu-line-head');
menu.addEventListener('mouseover', function (event){
    if(!event.target.id){ opMenCont.innerHTML = ''; }
    activatedID = event.target.id;
    if(activatedID.includes('_menu_')){
        switch (activatedID){
            case '_menu_li-1' : opMenCont.innerHTML += opMenCont.hasChildNodes() ? '' : linesfunc().demosLinks[1];
                activatedEl = document.querySelector(`#${linesfunc().demosLinks[0]}`)
                return activatedElFunc(activatedEl);

            case '_menu_li-2' : opMenCont.innerHTML += opMenCont.hasChildNodes() ? '' : linesfunc().postLinks[1];
                activatedEl = document.querySelector(`#${linesfunc().postLinks[0]}`)
                return activatedElFunc(activatedEl);

            case '_menu_li-3' : opMenCont.innerHTML += opMenCont.hasChildNodes() ? '' : linesfunc().featureLinks[1];
                activatedEl = document.querySelector(`#${linesfunc().featureLinks[0]}`)
                return activatedElFunc(activatedEl);

            case '_menu_li-4' : opMenCont.innerHTML += opMenCont.hasChildNodes() ? '' : linesfunc().categoryLinks[1];
                activatedEl = document.querySelector(`#${linesfunc().categoryLinks[0]}`)
                return activatedElFunc(activatedEl);

            case '_menu_li-5' : opMenCont.innerHTML += opMenCont.hasChildNodes() ? '' : linesfunc().shopLinks[1];
                activatedEl = document.querySelector(`#${linesfunc().shopLinks[0]}`)
                return activatedElFunc(activatedEl);

            case '_menu_li-6' : opMenCont.innerHTML += opMenCont.hasChildNodes() ? '' : linesfunc().buyNowLinks[1];
                activatedEl = document.querySelector(`#${linesfunc().buyNowLinks[0]}`)
                return activatedElFunc(activatedEl);
        }
    };
});

function activatedElFunc (activatedEl){

    activatedEl.addEventListener('mouseenter', function (){

    })

    activatedEl.addEventListener('mouseleave', function (){
        opMenCont.innerHTML = '';
    })
};
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
