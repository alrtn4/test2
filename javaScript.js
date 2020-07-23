"use strict"

//fader code

let intervalTag;
let timeoutTag;
let rButton = $('#right');
let circle = $('.circle');
let img = $('#fader img');
let lButton = $('#left');
let canClick = true;

change();

intervalTag = setInterval(moveForward , 5000);

function moveForward(){
    let img = $('#fader img:last').css('opacity' , 0);
    timeoutTag = setTimeout(() => {
        $('#fader').prepend(img);
        img.css('opacity' , 1);
        canClick = true;
    }, 600); 
        
    change(true);
}

rButton.on('click' , rMoveForward);

function rMoveForward(){
    if(canClick){
        clearInterval(intervalTag);
        clearTimeout(timeoutTag);
        moveForward();        
        intervalTag = setInterval(moveForward , 5000);
        canClick = false;
    }
}

lButton.on('click' , moveBackward);
function moveBackward(){
    clearInterval(intervalTag);
    clearTimeout(timeoutTag);
    let img = $('#fader img:first').css('opacity' , 0).insertBefore('#left');

    setTimeout(() => {
        img.css('opacity' , 1);
        intervalTag = setInterval(moveForward , 5000);        
    }, 50);

    change();
}

circle.click(function(){
    clearInterval(intervalTag);
    clearTimeout(timeoutTag);

    while($('#fader img:last').attr('src') != 
            img.eq($('.circle').index(this)).attr('src')) {
        $('#fader img:first').insertBefore('#left').css('opacity' , 0);
    }
    setTimeout(() => {
        $('#fader img').css('opacity' , 1);
        intervalTag = setInterval(moveForward , 5000);
    } , 50);

    change();
});

function change(moveForward){
    $('.circle').removeClass('selected').css('left' , '')
        .css('backgroundColor' , '');
    let index = $('#fader img:last').attr('index');

    if(moveForward){
        index--;
        if(index < 0){
            index = 3;
        }
    }

    let currentCircle = $('.circle').eq(index);
    if(getWidth() >= 960){
        currentCircle.css('left' , '-=2');            
    }
    currentCircle.addClass('selected').css('backgroundColor' , 'red');
    if(index == 0){
        currentCircle.css('left' , '');
    }
}





/************************************************************************/




//market code

let market = document.querySelector('#market');
let productA = document.querySelectorAll('.product .purchase a');
let productC = document.querySelectorAll('.product .curtain');
let proNumber = 0;

let intervalTag3 = setInterval(choose , 5000);

function choose(){
    productA[proNumber].classList.add('hover2');
    productC[proNumber].classList.add('hover3');

    if(proNumber == 0){
        proNumber = 1;
    }else if(proNumber == 1){
        proNumber = 0;
    }

    productA[proNumber].classList.remove('hover2');
    productC[proNumber].classList.remove('hover3');
}

market.addEventListener('mouseenter' , chooseOff);
market.addEventListener('mouseleave' , chooseOn);

function chooseOff(){
    clearInterval(intervalTag3);
    productA[0].classList.remove('hover2');
    productC[1].classList.remove('hover3');
    productA[1].classList.remove('hover2');
    productC[0].classList.remove('hover3');
}

function chooseOn(){
    intervalTag3 = setInterval(choose , 5000);
}





/**********************************************************************/



//page elements' "slide and fade by scrolling" code

let page = document.querySelectorAll('.page');
let personalInfo = document.querySelectorAll('.personal-info');
let fader = document.querySelector('#fader');
let profile = document.querySelector('#profile');
let nav = document.querySelector('nav');

if(getWidth() >= 960){
    document.body.onscroll = scrollPAge960;
}
if(getWidth() >= 720 && getWidth() < 960){
    document.body.onscroll = scrollPAge720;
}
if(getWidth() < 720){
    document.body.onscroll = scrollPAge360;
}

window.addEventListener('resize' , screenWidthCheck);

function screenWidthCheck(){
    if(getWidth() >= 960){
        resetTheProperties();
        document.body.onscroll = scrollPAge960;
    }
    if(getWidth() >= 720 && getWidth() < 960){
        resetTheProperties();
        document.body.onscroll = scrollPAge720;
    }
    if(getWidth() < 720){
        resetTheProperties();
        document.body.onscroll = scrollPAge360;
    }
}

function scrollPAge360(){
    console.log(pageYOffset);
    if(pageYOffset < 50){
        personalInfo[0].style.left = '100px';
        personalInfo[0].style.opacity = 0;
    }
    if(window.pageYOffset > 50){
        personalInfo[0].style.left = 0;
        personalInfo[0].style.opacity = 1;
    }
    if(pageYOffset < 300){
        outer.style.right = '100px';
        outer.style.opacity = 0;
    }
    if(window.pageYOffset > 300){
        outer.style.right = 0;
        outer.style.opacity = 1;
    }
    if(pageYOffset < 600){
        personalInfo[1].style.left = '100px';
        personalInfo[1].style.opacity = 0;
    }
    if(pageYOffset > 600){
        personalInfo[1].style.left = 0;
        personalInfo[1].style.opacity = 1;
    }
    if(pageYOffset < 800){
        profile.style.right = '100px';
        profile.style.opacity = 0;
    }
    if(pageYOffset > 800){
        profile.style.right = 0;
        profile.style.opacity = 1;
    }
    if(pageYOffset < 1000){
        personalInfo[2].style.left = '100px';
        personalInfo[2].style.opacity = 0;
    }
    if(pageYOffset > 1000){
        personalInfo[2].style.left = 0;
        personalInfo[2].style.opacity = 1;
    }
    if(pageYOffset < 1200){
        fader.style.right = '100px';
        fader.style.opacity = 0;
    }
    if(pageYOffset > 1200){
        fader.style.right = 0;
        fader.style.opacity = 1;
    }
    if(pageYOffset < 1500){
        personalInfo[3].style.left = '100px';
        personalInfo[3].style.opacity = 0;
    }
    if(pageYOffset > 1500){
        personalInfo[3].style.left = 0;
        personalInfo[3].style.opacity = 1;
    }
    if(pageYOffset < 1575){
        market.style.right = '100px';
        market.style.opacity = 0;
    }
    if(pageYOffset > 1575){
        market.style.right = 0;
        market.style.opacity = 1;
    }
    if(pageYOffset < 2300){
        personalInfo[4].style.left = '100px';
        personalInfo[4].style.opacity = 0;
    }
    if(pageYOffset > 2300){
        personalInfo[4].style.left = 0;
        personalInfo[4].style.opacity = 1;
    }
    if(pageYOffset < 2736){
        nav.style.right = '100px';
        nav.style.opacity = 0;
    }
    if(pageYOffset > 2736){
        nav.style.right = 0;
        nav.style.opacity = 1;
    }
}

function scrollPAge720(){
    console.log(pageYOffset);
    if(pageYOffset < 200){
        personalInfo[0].style.right = '100px';
        personalInfo[0].style.opacity = 0;
        outer.style.left = '100px';
        outer.style.opacity = 0;
    }
    if(window.pageYOffset > 200){
        personalInfo[0].style.right = 0;
        personalInfo[0].style.opacity = 1;
        outer.style.left = 0;
        outer.style.opacity = 1;
    }
    if(pageYOffset < 400){
        personalInfo[1].style.left = '100px';
        personalInfo[1].style.opacity = 0;
        profile.style.right = '100px';
        profile.style.opacity = 0;
    }
    if(pageYOffset > 400){
        personalInfo[1].style.left = 0;
        personalInfo[1].style.opacity = 1;
        profile.style.right = 0;
        profile.style.opacity = 1;
    }
    if(pageYOffset < 715){
        personalInfo[2].style.right = '100px';
        personalInfo[2].style.opacity = 0;
        fader.style.left = '100px';
        fader.style.opacity = 0;
    }
    if(pageYOffset > 715){
        personalInfo[2].style.right = 0;
        personalInfo[2].style.opacity = 1;
        fader.style.left = 0;
        fader.style.opacity = 1;
    }
    if(pageYOffset < 1000){
        personalInfo[3].style.left = '100px';
        personalInfo[3].style.opacity = 0;
        market.style.right = '100px';
        market.style.opacity = 0;
    }
    if(pageYOffset > 1000){
        personalInfo[3].style.left = 0;
        personalInfo[3].style.opacity = 1;
        market.style.right = 0;
        market.style.opacity = 1;
    }
    if(pageYOffset < 1430){
        personalInfo[4].style.right = '100px';
        personalInfo[4].style.opacity = 0;
        nav.style.left = '100px';
        nav.style.opacity = 0;
    }
    if(pageYOffset > 1430){
        personalInfo[4].style.right = 0;
        personalInfo[4].style.opacity = 1;
        nav.style.left = 0;
        nav.style.opacity = 1;
    }
}

function scrollPAge960(){
    console.log(pageYOffset);
    if(pageYOffset < 300){
        personalInfo[0].style.left = '100px';
        personalInfo[0].style.opacity = 0;
        outer.style.right = '100px';
        outer.style.opacity = 0;
    }
    if(window.pageYOffset > 300){
        personalInfo[0].style.left = 0;
        personalInfo[0].style.opacity = 1;
        outer.style.right = 0;
        outer.style.opacity = 1;
    }
    if(pageYOffset < 715){
        personalInfo[1].style.right = '100px';
        personalInfo[1].style.opacity = 0;
        profile.style.left = '100px';
        profile.style.opacity = 0;
    }
    if(pageYOffset > 715){
        personalInfo[1].style.right = 0;
        personalInfo[1].style.opacity = 1;
        profile.style.left = 0;
        profile.style.opacity = 1;
    }
    if(pageYOffset < 1220){
        personalInfo[2].style.left = '100px';
        personalInfo[2].style.opacity = 0;
        fader.style.right = '100px';
        fader.style.opacity = 0;
    }
    if(pageYOffset > 1220){
        personalInfo[2].style.left = 0;
        personalInfo[2].style.opacity = 1;
        fader.style.right = 0;
        fader.style.opacity = 1;
    }
    if(pageYOffset < 1630){
        personalInfo[3].style.right = '100px';
        personalInfo[3].style.opacity = 0;
        market.style.left = '100px';
        market.style.opacity = 0;
    }
    if(pageYOffset > 1630){
        personalInfo[3].style.right = 0;
        personalInfo[3].style.opacity = 1;
        market.style.left = 0;
        market.style.opacity = 1;
    }
    if(pageYOffset < 2090){
        personalInfo[4].style.right = '100px';
        personalInfo[4].style.opacity = 0;
        nav.style.left = '100px';
        nav.style.opacity = 0;
    }
    if(pageYOffset > 2090){
        personalInfo[4].style.right = 0;
        personalInfo[4].style.opacity = 1;
        nav.style.left = 0;
        nav.style.opacity = 1;
    }
}

function resetTheProperties(){
    personalInfo[0].style.removeProperty('left');
    personalInfo[0].style.removeProperty('right');
    outer.style.removeProperty('left');
    outer.style.removeProperty('right');
    personalInfo[1].style.removeProperty('left');
    personalInfo[1].style.removeProperty('right');
    profile.style.removeProperty('left');
    profile.style.removeProperty('right');
    personalInfo[2].style.removeProperty('left');
    personalInfo[2].style.removeProperty('right');
    fader.style.removeProperty('left');
    fader.style.removeProperty('right');
    market.style.removeProperty('left');
    market.style.removeProperty('right');
    personalInfo[3].style.removeProperty('left');
    personalInfo[3].style.removeProperty('right');
    personalInfo[4].style.removeProperty('left');
    personalInfo[4].style.removeProperty('right');
    nav.style.removeProperty('left');
    nav.style.removeProperty('right');
}






/*************************************************************************/




//toolbar button code

$('#toolbar img').on('click' , () => {
    $('#toolbar ul').slideToggle();
});

$('#toolbar a').click(function(){
    if(getWidth() < 960){
        $('#toolbar ul').slideUp();
    }
})

$(window).resize(() => {
    if(getWidth() >= 960){
        $('#toolbar ul').css('display' , '');
        open = false;
    }
});



/*********************************************************************/





//navigator code for width bigger than 1140px

let item = $('nav .item');
let currentItem , lastItem;
currentItem = 0;
lastItem = 3;

let intervalTag2 = setInterval(moveNext , 5000); 
function moveNext(){
    item.eq(currentItem).addClass('hover');
    item.eq(lastItem).removeClass('hover');
    currentItem++;
    if(currentItem > 3){
        currentItem = 0;
    }
    lastItem++;
    if(lastItem > 3){
        lastItem = 0;
    }
}

$(nav).hover(() => {
    clearInterval(intervalTag2);
    item.eq(lastItem).removeClass('hover');
} , () => {
    intervalTag2 = setInterval(moveNext , 5000);
})





/**********************************************************************/





//navigator code during 360px,720px and 960px width 

$('nav a').on('click' , function(event){
    event.preventDefault();
    $(this).siblings('.submenu').slideToggle();
    $(this).parent().siblings().find('.submenu').slideUp();
});




/**************************************************************************/

//header code

let hImg = document.querySelectorAll('header img');
let hImgNumber = 1;

changer();
setInterval(changer , 5000);

function changer(){
    hImg[hImgNumber].style.opacity = '0';
    hImg[hImgNumber].style.transform = 'scale(1)';
    if(hImgNumber == 0){
        hImgNumber = 1;
    }else{
        hImgNumber = 0;
    }
    hImg[hImgNumber].style.opacity = '1';
    hImg[hImgNumber].style.transform = 'scale(1.1)';
}




// setInterval(() => {
//     $('header img').css('transition' , '0s');
//     $('header img').eq(0).css({'opacity' : 0 , 'transform' : 'scale(1)'});
//     $('header img').eq(0).insertBefore('header h2');
//     setTimeout(() => {
//         $('header img').eq(1).css({'opacity' : 1 , 'transform' : 'scale(1.1)' , 'transition' : '0.6s'});    
//     }, 1000);
// }, 5000);




/**************************************************************************/

//function for accessing the width of browser

function getWidth(){
    return window.innerWidth;
}