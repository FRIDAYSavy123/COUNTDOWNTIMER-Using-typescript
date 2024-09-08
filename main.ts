#!/usr/bin/env node


import { DifferenceInSecondsOptions, differenceInSeconds } from "date-fns";

// function for count down second 

function* countdownTimer(second : number) {
    //while loop
    while(second > 0){
        yield second;
        second--;
    }
}
// step 2 counter initialization

let timerIterator = countdownTimer(10) // we can change countdown value also like (20).

// function to create a countdown timer

function displayCountDown(){
// value below 10

let result = timerIterator.next()

// if else condition apply

if(!result.done){
    //current date and time calls
    const now = new Date();
    // calculate minutes in time in minutes
    const countdownTimer = new Date(now.getTime() + (result.value * 1000))

    // calculate out remaining seconds in time 
    const remainingSeconds = differenceInSeconds(countdownTimer , now)
console.log(`Remaining seconds : ${remainingSeconds}`);

setTimeout(displayCountDown,1000) // 1seconds is = 1000 milliseconds

}    else {
      // display result countdown complete
      console.log("C O U N T D O W N | C O M P L E T E !");
      
}
}
// Invoking function

displayCountDown()



