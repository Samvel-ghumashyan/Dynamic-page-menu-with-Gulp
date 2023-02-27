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