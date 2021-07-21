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

/* 
Person Constructor Function:
Person Object to house 
User Input Data that then can be 
passed on to next function
*/

function Person() {
  // Person Key-Value Profile 
  this.firstName = inputFirstNme.value;
  this.lastName = inputLastNme.value;
  this.hobby1 = hobby1.value;
  this.hobby2 = hobby2.value;
  this.jobTitle = jobTitle.value;
  this.favColor = colorInput.value;
  this.favNumber = favNumber.value;
  this.petName = petName.value;
  this.firstInitial = this.firstName[0];
  this.secondInitial = this.lastName[0];
}


function StyleElements() {

  // Calls the Person Object inside this function
  Person.call(this);

  this.applyStyles(document.createElement('p'), ['firstInitial'], firstNameContainer);
  this.applyStyles(document.createElement('p'), ['secondInitial'], lastNameContainer);
  this.applyStyles(document.createElement('p'), ['hobby1'], hobby1Container);
  this.applyStyles(document.createElement('p'), ['hobby2'], hobby2Container);
  this.applyStyles(document.createElement('p'), ['jobTitle'], jobContainer);
  this.applyStyles(document.createElement('p'), ['favColor'], favColorContainer);
  this.applyStyles(document.createElement('p'), ['petName'], petContainer);
  this.applyStyles(document.createElement('h3'), ['favNumber'], favNumContainer);
}

// Method takes an element, inserts data inside and renders element onto page
StyleElements.prototype.applyStyles = function(element, text, parentContainer) {
  var elementToPage = element;
  elementToPage.innerText = this[text];
  parentContainer.append(elementToPage);
}







/* ------------------------------------------- */

// Build Function

function createProfile() {

  if (inputFirstNme.value.length != 0 && inputLastNme.value.length != 0) {
    // Let's generate the styled elements to be placed on the page
    let generateStyle = new StyleElements();

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


