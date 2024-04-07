#Projects related to DOM

##Project Link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

#Solution Code

##Project 1

```javascript 
const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach( function(button){
  // console.log(button) node list
  button.addEventListener('click',function(e){
    // console.log(e)
    // console.log(e.target)
    switch(e.target.id){
      case "grey":
      // body.style.backgroundColor="grey";
      body.style.backgroundColor=e.target.id;
      break;
      case "white":
      body.style.backgroundColor="white";
      break;
      case "blue":
      body.style.backgroundColor="blue";
      break;
      case "yellow":
      body.style.backgroundColor="yellow";
      break;
    }
  })
})
```