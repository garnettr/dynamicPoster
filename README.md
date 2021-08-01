
# [DynamicPoster](https://garnettr.github.io/dynamicPoster/)

![bkg-test-4](https://user-images.githubusercontent.com/28959285/127429614-60b98b39-85cf-4000-aac3-7bdc3f957322.jpg)


While working through my [Udemy Course](demy.com/course/understand-javascript/), I thought it would be a great idea to build a mini project to practice of the patterns I was learning.

The initial idea was to practice using Constructor Functions  - UNTIL -  I wrote the code and decided to refacture it. 

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
So I stripped the code down a bit to a very simple solution. 

**And now the code looks something like this:**

```
function applyStyles(element, text, parentContainer) {
  var elementToPage = element;
  elementToPage.innerText = text;
  parentContainer.append(elementToPage);
}
```


Once the JS was settled (for now) it was time to put the responsive frame together using CSS Grids.

![responsive-4](https://user-images.githubusercontent.com/28959285/127758935-d87f856d-389a-420d-a705-86e2af406d22.gif)



**Future Goals:** 
- To make the page dynamic to your color choice
- Adding a color picker

