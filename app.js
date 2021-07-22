/////////////////

'use strict'

// Form Inputs
const form = document.querySelector("form");
const inputFirstNme = document.querySelector('#fname');
const inputLastNme = document.querySelector('#lname');
const hobby1 = document.querySelector('.hobby1');
const hobby2 = document.querySelector('.hobby2');
const hobby3 = document.querySelector('.hobby3');
const jobTitle = document.querySelector('.jobTitle');
const petName = document.querySelector('.petName');
const colorInput = document.querySelector('.colorInput');
const favNumber = document.querySelector('.numbers');
const formButton = document.querySelector('#submitButton');

//Container Divs
const petContainer = document.querySelector('.petName-Container');
const lastNameContainer = document.querySelector('.lastName-Container');
const firstNameContainer = document.querySelector('.firstName-Container');
const hobby1Container = document.querySelector('.hobby1-Container');
const hobby2Container = document.querySelector('.hobby2-Container');
const jobContainer = document.querySelector('.jobTitle-Container');
const favColorContainer = document.querySelector('.colorContainer');
const favNumContainer = document.querySelector('.favNumber-Container');
const thanksContainer = document.querySelector('.thanksMessage');
const error = document.querySelector('.error');
 

/* -------------------------------------------------------------*/


function applyStyles(element, text, parentContainer) {
  var elementToPage = element;
  elementToPage.innerText = text;
  parentContainer.append(elementToPage);
}



/* ------------------------------------------- */

// Build Function

function createProfile() {



  if (inputFirstNme.value.length != 0 && inputLastNme.value.length != 0) {


    applyStyles(document.createElement('p'), inputFirstNme.value[0], firstNameContainer);
    applyStyles(document.createElement('p'), inputFirstNme.value[0], lastNameContainer);
    applyStyles(document.createElement('p'), hobby1.value, hobby1Container);
    applyStyles(document.createElement('p'), hobby2.value, hobby2Container);
    applyStyles(document.createElement('p'), jobTitle.value, jobContainer);
    applyStyles(document.createElement('p'), colorInput.value, favColorContainer);
    applyStyles(document.createElement('p'), petName.value, petContainer);
    applyStyles(document.createElement('h3'), favNumber.value, favNumContainer);

    /* Now let's disable the submit button
    so it's not clicked "51" times :) */
    formButton.disabled = true;

    // Add class to show thanks message after 
    form.classList.add("submitted");

    error.classList.remove("errorFound");
  } else {
    error.classList.add("errorFound");
  }

};


