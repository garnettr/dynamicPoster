# [DynamicPoster](https://garnettr.github.io/dynamicPoster/)

![bkg-test-4](https://user-images.githubusercontent.com/28959285/127429614-60b98b39-85cf-4000-aac3-7bdc3f957322.jpg)


While working through my [Udemy Course](demy.com/course/understand-javascript/), I thought it would be a great idea to practice some of the skills I was learning.

The initial idea for this project was to practice using Constructor Functions  -  I quickly realized that was overkill for this project
(Yes I know this is a old pattern :sweat_smile: and you could/should use Class).

**Before the code looked something like this:**

```
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
    return elementToPage;
  }

}
```

 I decided maybe this wasn’t the best place to use Constructor Functions and that I should probably practice using the Class pattern in my next project. 
So I stripped the code down to a very simple solution. 

**And now the code looks something like this:**

```
function applyStyles(element, text, parentContainer) {
  var elementToPage = element;
  elementToPage.innerText = text;
  parentContainer.append(elementToPage);
}
```


Now that the .JS was all settled (for now) it was time to put the CSS in motion and I thought what a great opportunity to brush up on CSS Grids.

> .gif of responsive grid, coming soon! 


**Future Goals:** 
- To make the page dynamic to your color choice
- Adding a color picker

