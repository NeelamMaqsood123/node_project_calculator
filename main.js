import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        type: "number",
        name: "number1",
        message: "Kindly Enter Your First Number:"
    },
    {
        type: "number",
        name: "number2",
        message: "Kindly Enter Your Second Number:"
    },
    {
        type: "list",
        name: "operator",
        choices: ["+", "-", "*", "/"],
        message: "Kindly Select Operator:"
    }
]);
if (answers.operator === "+") {
    console.log(answers.number1 + answers.number2);
}
else if (answers.operator === "-") {
    console.log(answers.number1 - answers.number2);
}
else if (answers.operator === "*") {
    console.log(answers.number1 * answers.number2);
}
else if (answers.operator === "/") {
    console.log(answers.number1 / answers.number2);
}
else {
    console.log("Kindly enter valid input");
}
