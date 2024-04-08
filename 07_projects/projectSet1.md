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

## project 2
``` javascript 
const form = document.querySelector('form')

// when we click  the submit button , by default the data will be sent to the server side , we have to stop that action

// this will give an empty value
// const weight = parseInt(document.querySelector('#weight').value) //by default - string

// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit',function(e){
  e.preventDefault() //prevent the default action

  const weight = parseInt(document.querySelector('#weight').value) //by default - string

  const height = parseInt(document.querySelector('#height').value)

  const results = document.querySelector('#results')

  if(height==='' || height<=0 || isNaN(height)){
    results.innerHTML = "Please enter a valid height"
  } else if(weight==='' || weight<=0 || isNaN(weight)){
    results.innerHTML = "Please enter a valid weight"
  } else{
    const bmi = (weight/((height*height)/10000)).toFixed(2)//till 2 decimal places

    if(bmi<18.6){
    results.innerHTML = `<span>Underweight - ${bmi}</span>`
    }else if(bmi>=18.6 && bmi<24.9){
    results.innerHTML = `<span>Normal - ${bmi}</span>`
    }else{
    results.innerHTML = `<span>Overweight - ${bmi}</span>`
    }
  }


})
```