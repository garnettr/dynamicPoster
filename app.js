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

//Container Divs
const petContainer = document.querySelector('.petName-Container');
const lastNameContainer = document.querySelector('.lastName-Container');
const firstNameContainer = document.querySelector('.firstName-Container');
const hobby1Container = document.querySelector('.hobby1-Container');
const hobby2Container = document.querySelector('.hobby2-Container');
const jobContainer = document.querySelector('.jobTitle-Container');
const favColorContainer = document.querySelector('.colorContainer');
const favNumContainer = document.querySelector('.favNumber-Container');








function Person() {
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

  this.applyStyles = function(element, text) {
    var elementToPage = element;

    elementToPage.innerText = this[text];
    // elementToPage.style.fontSize = fontSize;
    // elementToPage.style.position = "absolute";
    // elementToPage.style.top = `${randomNumber(-2, 80)}%`;
    // elementToPage.style.left = `${randomNumber(2, 60)}%`;

    
    return elementToPage;
  }

}

// create Initials & print on page
// what we need to assign to all elements created
// Size
// Positioning
// Color
function StyleElement() {

  Person.call(this);


  this.firstInitialStyle = this.applyStyles(document.createElement('p'), ['firstInitial']);
  this.lastInitialStyle = this.applyStyles(document.createElement('p'), ['secondInitial']);
  this.hobby1Style = this.applyStyles(document.createElement('p'), ['hobby1']);
  this.hobby2Style = this.applyStyles(document.createElement('p'), ['hobby2']);
  this.jobStyle = this.applyStyles(document.createElement('p'), ['jobTitle']);
  this.favColorStyle = this.applyStyles(document.createElement('p'), ['favColor']);
  this.petNameStyle = this.applyStyles(document.createElement('p'), ['petName']);
  this.favNumStyle = this.applyStyles(document.createElement('h3'), ['favNumber']);

  this.printToPage = function(element, parentContainer) {
    parentContainer.append(element);
  }

  this.cloneElements = function() {
    for (let i = 0; i < 3; i++) {
      element[i];
    }
  }

}

function randomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}



/* ------------------------------------------- */

function createProfile() {
  // Create a new object called newPerson
  let newPerson = new Person();
  /* binding the 'person' object to LogName
  This will allow the 'this.getFullName()' to run
  Bind creates a copy of LogName
  */
  let generateStyle = new StyleElement();

  // generateStyle.cloneElements();
  generateStyle.printToPage(generateStyle.firstInitialStyle, firstNameContainer);
  generateStyle.printToPage(generateStyle.lastInitialStyle, lastNameContainer);

  generateStyle.printToPage(generateStyle.hobby1Style, hobby1Container);
  generateStyle.printToPage(generateStyle.hobby2Style, hobby2Container);

  generateStyle.printToPage(generateStyle.jobStyle, jobContainer);

  generateStyle.printToPage(generateStyle.favColorStyle, favColorContainer);

  generateStyle.printToPage(generateStyle.petNameStyle, petContainer);

  generateStyle.printToPage(generateStyle.favNumStyle, favNumContainer);
};



