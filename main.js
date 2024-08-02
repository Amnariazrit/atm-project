#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 20000;
const myPin = 4545;
const pinAns = await inquirer.prompt({
    name: "pin",
    message: "enter your pin",
    type: "number",
});
if (pinAns.pin === myPin) {
    console.log("correct pin code");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select an option",
            type: "list",
            choices: ["withdraw", "check balance", "fast cash"],
        },
    ]);
    // if user select withdraw
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number",
            },
        ]);
        if (amountAns.amount <= myBalance) {
            // =, -=, +=
            let balance = (myBalance -= amountAns.amount);
            console.log(`Your remaining balance is: ${balance}`);
        }
        else {
            console.log(`you have insufficient balance.`);
        }
    }
    // if user select fast cash
    else if (operationAns.operation === "fast cash") {
        let optionAns = await inquirer.prompt([
            {
                name: "option",
                message: "please select an amount",
                type: "list",
                choices: ["1000", "3000", "5000", "25000"],
            },
        ]);
        if (optionAns.option <= myBalance) {
            let balance2 = (myBalance -= optionAns.option);
            console.log(`Your remaining balance is: ${balance2}`);
        }
        else {
            console.log(`you have insufficient balance.`);
        }
    }
    else if (operationAns.operation === "check balance") {
        console.log(`you current balance is: ${myBalance}`);
    }
}
else {
    console.log("incorrect pin number");
}
