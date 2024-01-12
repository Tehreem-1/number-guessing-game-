#!/usr/bin/env node
import inquirer from 'inquirer';
const systemGenratedNo = Math.floor(Math.random() * 10);
const answer = await inquirer.prompt([
    {
        type: "number",
        name: "userGuess",
        message: "write your guess b/w 1 to 10 :"
    }
]);
const { userGuess } = answer;
console.log(userGuess, "userGuess", systemGenratedNo, 'Sys');
if (userGuess === systemGenratedNo) {
    console.log("yeaaaa your answer is correct \n you win! ");
}
else {
    console.log("Please try again Better luck next time!");
}
