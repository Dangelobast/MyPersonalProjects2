"use strict";
const button = document.querySelector(".share-button");
const menu = document.querySelector(".share-items");
const shareImg = document.querySelector(".share-img");

button.addEventListener('click', function(){
    if(!menu.classList.contains("unhide")){
    menu.classList.toggle('unhide');
    shareImg.style.filter= 'invert(1) brightness(3)';
    button.style.backgroundColor = 'hsl(214, 17%, 51%)'
    }
    else{
        menu.classList.remove("unhide");
        shareImg.style.filter = '';
        button.style.backgroundColor = '';
    }
});