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

  /* Method takes element and inserts
  data inside and returnsS Element */
  this.applyStyles = function(element, text) {
    var elementToPage = element;
    elementToPage.innerText = this[text];
    return elementToPage;
  }

}

/* "Style Element" a Constructor Object
"Saves newly created elements and copy/data to keys that
can then be placed on the page  */
function StyleElement() {

  // binds the 'This' keyword to Person Object
  Person.call(this);

  // Defines new keys and elements values
  this.firstInitialStyle = this.applyStyles(document.createElement('p'), ['firstInitial']);
  this.lastInitialStyle = this.applyStyles(document.createElement('p'), ['secondInitial']);
  this.hobby1Style = this.applyStyles(document.createElement('p'), ['hobby1']);
  this.hobby2Style = this.applyStyles(document.createElement('p'), ['hobby2']);
  this.jobStyle = this.applyStyles(document.createElement('p'), ['jobTitle']);
  this.favColorStyle = this.applyStyles(document.createElement('p'), ['favColor']);
  this.petNameStyle = this.applyStyles(document.createElement('p'), ['petName']);
  this.favNumStyle = this.applyStyles(document.createElement('h3'), ['favNumber']);

  // Method appends elements to containers of your choice
  this.printToPage = function(element, parentContainer) {
    parentContainer.append(element);
  }
}


/* ------------------------------------------- */

// Build Function

function createProfile() {
  let generateStyle = new StyleElement();

  // Let's generate the styled elements to be placed on the page
  generateStyle.printToPage(generateStyle.firstInitialStyle, firstNameContainer);
  generateStyle.printToPage(generateStyle.lastInitialStyle, lastNameContainer);
  generateStyle.printToPage(generateStyle.hobby1Style, hobby1Container);
  generateStyle.printToPage(generateStyle.hobby2Style, hobby2Container);
  generateStyle.printToPage(generateStyle.jobStyle, jobContainer);
  generateStyle.printToPage(generateStyle.favColorStyle, favColorContainer);
  generateStyle.printToPage(generateStyle.petNameStyle, petContainer);
  generateStyle.printToPage(generateStyle.favNumStyle, favNumContainer);

  /* Now let's disable the submit button
  so it's not clicked "51" times :) */
  formButton.disabled = true;
};



