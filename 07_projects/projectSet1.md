# Projects related to DOM

## Project Link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code

## Project 1

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

## Project 3
```javascript
const clock = document.getElementById('clock')

// let date = new Date()
// console.log(date.toLocaleTimeString())

// setInterval(function(){},time(in millisec)) //give a method and tell after what interval it has to be run how many times

setInterval(function(){
  let date = new Date()
  clock.innerHTML = date.toLocaleTimeString()
  // console.log(date.toLocaleTimeString())
// we will get a value after every 1 sec
},1000)

```

## project 4
```javascript
// generate a random number between 1 and 100
let randomNumber = parseInt(Math.random() * 100 + 1);
// number is in between 1 and 100
const submit = document.querySelector('#subt');

// for user input
const userInput = document.querySelector('#guessField');

// user previous guesses
const guessSlot = document.querySelector('.guesses');

// remaining guess
const remaining = document.querySelector('.lastResult');

const lowOrHigh = document.querySelector('.lowOrHi');

// display paragraphs
const startOver = document.querySelector('.resultParas');

// for injecting values
const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

// available for playing game or not
console.log(randomNumber)
if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault(); //stops the default action
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

// give and guess and validate it
function validateGuess(guess) {
  // guesses a valid number or not
  if (isNaN(guess)) {
    alert('please enter a valid number');
  } else if (guess < 1) {
    alert('please enter a number more than 1');
  } else if (guess > 100) {
    alert('please enter a number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 10) {
      displayGuess(guess);
      displayMessage(`game over . random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  // checks whether the guessed number is correct
  if (guess === randomNumber) {
    displayMessage(`you guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is too low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is too high`);
  }
}

function displayGuess(guess) {
  //used for clean up
  userInput.value = '';
  guessSlot.innerHTML += `${guess} `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  // this functions displays a message . it directly interacts with dom
  lowOrHigh.innerHTML = `<h3>${message}</h3>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', ''); //key value pair
  p.classList.add('button'); //for creating a new button
  p.innerHTML = `<h2 id="newGame">start new game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newgamebutton = document.querySelector('#newGame');
  newgamebutton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}

```
## project 5
```javascript
const insert = document.getElementById('insert')
window.addEventListener('keydown',(e)=>{
  insert.innerHTML=`
  <div class="color">
  <table>
  <tr>
    <th>key</th>
    <th>keyCode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key == " "?"space":e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
</div>
  `
})
```

## project 6
```javascript
// generate a random color
// the hexadecimal value ranges from 0-9 and then a to f
const generate = function(){
  const hex = "0123456789ABCDEF"
  let color = '#'
  for(let i=0;i<6;i++){
    color+= hex[Math.floor(Math.random()*16)] //selects a random position from 0 to 16

  }
  return color
}
let set
const startChangingColor = function(){
  if(!set){
  set = setInterval(changebgcolor,900)
    
  }
  function changebgcolor(){
  document.body.style.backgroundColor = generate()
  }
}
const stopChangingColor = function(){
  clearInterval(set)
  set=null
}
document.getElementById('start').addEventListener('click',startChangingColor)

document.getElementById('stop').addEventListener('click',stopChangingColor)
// console.log(generate())
```