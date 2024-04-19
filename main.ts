import inquirer from "inquirer"
/*let todos = []
let condition = true

while(condition)
{
    let todoQuestions = await inquirer.prompt(
    [
    {
        name: "firstQuestion",
        type: "input",
        message: "what would you like to add on your todos",
    },
    {
        name: "secondQuestion",
        type: "confrim",
        message: "would you like to add more on your todos?",
        defult: "true"
    },
    
]);
todos.push(todoQuestions.firstQuestion);
console.log(todos)
condition = todoQuestions.secondQuestion
}*/

//ADD MORE In TODO LIST...

let todos:string[] = [];
let condition = true

while (condition){
    let Answer = await inquirer.prompt([
        {
            name: "Select",
            type: "list",
            message: "Select an option",
            choices: ["add",
                      "update",
                      "view",
                      "delete",
                      "exit"],


        }
    ]);
if (Answer.Select === "add"){
    let addTodo = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: "add items in the list",
        }
    ])
    todos.push(addTodo.todo);
    console.log(todos);
    
}
if (Answer.Select === "update"){
let updatetodo = await inquirer.prompt(
    {
        name: "todo",
        type: "list",
        message: "Update item at the list",
        choices: todos.map(item => item)
    })
    let addTodo = await inquirer.prompt({
        name: "todo",
        type: "input",
        message: "Add item in the list",
    })
    let newtodo = todos.filter(val => val !== updatetodo.todo);
     todos = [...newtodo,addTodo.todo];
     console.log(todos);
}  

if (Answer.Select === "view"){
    console.log("............ TO DO LIST......");
    console.log(todos);
}


if (Answer.Select === "delete"){
    let deletetodo = await inquirer.prompt({
        name: "todo",
        type: "list",
        message: "Select item to delete",
        choices: todos.map(item => item)
    })

let newtodo = todos.filter(val => val !== deletetodo.todo);
todos = [...newtodo];
console.log(todos);

}
if (Answer.Select === "exit"){
    console.log("Exiting program....");
    condition = false
} 
  }

