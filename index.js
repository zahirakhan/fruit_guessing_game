#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const fruits = [
    "apple",
    "banana",
    "orange",
    "grape",
    "strawberry",
    "pineapple"
];
const randomFruitIndex = Math.floor(Math.random() * fruits.length);
const randomFruit = fruits[randomFruitIndex];
const answer = await inquirer.prompt([
    {
        name: "userGuessFruit",
        type: "input",
        message: chalk.blue("Please Guess a Fruit (apple, banana, orange, grape, strawberry, pineapple): "),
    },
]);
const userGuess = answer.userGuessFruit;
if (userGuess === randomFruit) {
    console.log(chalk.greenBright("CONGRATULATIONS! You Guessed the Right Fruit"));
}
else {
    console.log(chalk.bgRed(`SORRY! You Guessed Wrong. The correct fruit was: ${randomFruit}`));
}
