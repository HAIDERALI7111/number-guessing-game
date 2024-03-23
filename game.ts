#! /usr/bin/env node
import inquirer from "inquirer";

let randomNumber = Math.floor(Math.random() * 6) + 1


const answer = await inquirer.prompt({
    name: "randomNumber",
    type: "number",
    message: "guess the number"
})

if (answer.randomNumber === randomNumber) {
    console.log("Congratulations your guessing number is correct")
} else {
    console.log(" your guessing number is wrong please try again!")
}
