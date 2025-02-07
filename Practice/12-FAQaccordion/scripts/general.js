'use strict';
    const openButtons = document.querySelectorAll('.icon-open');
    const paragraphContent = document.querySelectorAll('.question-body');
    const questions = document.querySelectorAll('.question');
    
 openButtons.forEach((button, index)=>{
 button.addEventListener('click', function(){
     
    paragraphContent.forEach((content, i)=>{
        if(i !== index){
            content.classList.remove('open-item');
            openButtons[i].src ='images/icon-plus.svg';
        }

    });
     const isOpen = paragraphContent[index].classList.toggle('open-item');
     openButtons[index].src = isOpen? `images/icon-minus.svg`: 'images/icon-plus.svg';
 })
 });
questions.forEach((question, index)=>{
question.addEventListener('click', function(){
    paragraphContent.forEach((content, i)=>{
        if(i !== index){
            content.classList.remove('open-item');
            openButtons[i].src ='images/icon-plus.svg';
        }

    });
     const isOpen = paragraphContent[index].classList.toggle('open-item');
     openButtons[index].src = isOpen? `images/icon-minus.svg`: 'images/icon-plus.svg';
});
});