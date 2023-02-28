
"use strict";

const inputValue =  document.getElementById('number');

const submitValue =  document.getElementById('submit');

const outputValue =  document.getElementById('guess');

const guesslowValue = document.getElementById('guessless');

const guesshighValue = document.getElementById('guesshigh');

const restartValue = document.getElementById('restart');

let guess = 9;

let highscore = 0;

guesshighValue.innerText = highscore;
guesslowValue.innerText = guess;

const randomNum = () =>{
  return Math.trunc(Math.random()*50+1);
} 

console.log(randomNum);

var randNum = randomNum();

console.log(randNum);

submitValue.addEventListener("click",function(){
  var guessNumber = Number(inputValue.value);
  console.log(guessNumber);


if(guessNumber && guessNumber >= 0 && guessNumber <= 100){

if (guess <= 1){

  restartValue.style.display="block";

  outputValue.textContent ="Game Over!";

  

}else{



  if(randNum === guessNumber){
    outputValue.textContent='Guess the Number is Correct';

      highscore = guess;

      guesshighValue.innerText = highscore;

      restartValue.style.display="block";
    


  }else if(randNum > guessNumber){

    outputValue.textContent='Guess the Number is low';

    guess--;

    guesslowValue.innerText = guess;

  }else if(randNum < guessNumber){
    outputValue.textContent='Guess the Number is higher';

    guess--;

    guesslowValue.innerText = guess;

  }
}

}
else{
 alert('Enter Your Valid Number')

}
})

//restart//


const restart = restartValue.addEventListener('click',function(){
  let guess = 9;

  let highscore = 0;
  
  guesshighValue.innerText = highscore;

  guesslowValue.innerText = guess;

  inputValue.value = " ";

 outputValue.textContent= " ";

 restartValue.style.display="none";
})

