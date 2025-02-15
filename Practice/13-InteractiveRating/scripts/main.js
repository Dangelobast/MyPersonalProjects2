"use strict";
/* ------ Basic code
const mainImage = document.querySelector('.support-star-icon');
const button = document.querySelector('.support-button');
const containerImage = document.querySelector('.img-container');
const title = document.querySelector('.support-title');
const body = document.querySelector('body');
const numbers = document.querySelector('.support-number-container');
const paragraph = document.querySelector('.support-paragraph');
const newParagraph = document.querySelector('.hide-item');
const allRatings= document.querySelectorAll('.rating');
const selectedRating = document.querySelector('.selected-rating')

button.addEventListener('click', function(){
    mainImage.src ='images/illustration-thank-you.svg';
    mainImage.style.borderRadius = 0;
    mainImage.style.backgroundColor = "transparent";
    mainImage.style.width="14rem";
    containerImage.style.display="flex";
    containerImage.style.justifyContent="center";
    title.textContent = "Thank you!";
    body.style.textAlign = "center";
    button.style.display = "none";
    numbers.style.display = "none";
    paragraph.textContent = "We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!";
    paragraph.style.marginBottom = "3rem";
    newParagraph.classList.remove("hide-item");
    

    


});


allRatings.forEach((currentRating, index) => {
 currentRating.addEventListener('click', function(){
   allRatings.forEach((rating) =>{
    rating.style.backgroundColor = "";
    rating.style.color ="";
   });
    currentRating.style.backgroundColor ="white";
    currentRating.style.color = "black";
    selectedRating.textContent = index + 1;
    
   
 });
    
});
*/
/*-----------Refactoring Code */
const mainImage = document.querySelector('.support-star-icon');
const button = document.querySelector('.support-button');
const containerImage = document.querySelector('.img-container');
const title = document.querySelector('.support-title');
const body = document.querySelector('body');
const numbers = document.querySelector('.support-number-container');
const paragraph = document.querySelector('.support-paragraph');
const newParagraph = document.querySelector('.hide-item');
const allRatings= document.querySelectorAll('.rating');
const selectedRating = document.querySelector('.selected-rating');

button.addEventListener('click', function(event){
    mainImage.src ='images/illustration-thank-you.svg';
    //Add class .support-star-icon-styles to mainImage
    mainImage.classList.add("support-star-icon-styles");
    //Add class to .support-star-icon-center to containerImage
   containerImage.classList.add("support-star-icon-center");
    title.textContent = "Thank you!";
    body.style.textAlign = "center";
    button.style.display = "none";
    numbers.style.display = "none";
    paragraph.textContent = "We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!";
    paragraph.style.marginBottom = "3rem";
    newParagraph.classList.remove("hide-item");
    console.log(event);
    

    


});
allRatings.forEach((currentRating, index) => {
    currentRating.addEventListener('click', function(){
      allRatings.forEach((rating) =>{
        rating.style.backgroundColor = "";
        rating.style.color ="";
      });
      const currentColor = window.getComputedStyle(currentRating).backgroundColor;
      if(currentColor == "rgb(255, 255, 255)"){
        currentRating.style.backgroundColor ="";
        currentRating.style.color = "";
      }
      else{
      currentRating.style.backgroundColor ="white";
      currentRating.style.color = "black";
       selectedRating.textContent = index + 1;
      }
       
      
    });
       
   });