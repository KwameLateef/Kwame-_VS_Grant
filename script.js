"use strict";
let greeting = prompt ("Would you like to play the game?");

if (greeting === "yes") {
    let userHealth = 40;
    let grantHealth = 10;
    let userName = prompt ("What's your name?"); 
    let wins = 0;
    while (grantHealth > 0) {
        console.log (`${userName}'s Health: ${userHealth}`);
        console.log (`Grant's Health: ${grantHealth}`);
        console.log (`${userName}'s Health: ${userHealth -= Math.floor(Math.random() * 2 + 1)}`);
        console.log (`Grant's Health: ${grantHealth -= Math.floor(Math.random() * 2 + 1)}`);
        if (wins === 3) {
        console.log (`Congrats ${userName}!`);   
        break; 

        } else if (userHealth <= 0) {
        console.log ("Game Over!");
        break; 
        
        } else if (grantHealth <= 0) {
            wins++;
            console.log(`${userName} wins: ${wins}`);
            grantHealth = 10;
        }
    }
} else if (greeting === "no") {
   console.log ("Bummer, maybe next time!");
}