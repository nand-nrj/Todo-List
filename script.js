let userInput = prompt("What would you like to do?");
const todo = ["Empty"];
while (userInput!=="quit" && userInput!=="q") {
    if(userInput==="list")
    {
        console.log("**********");
        for (let i = 0; i < todo.length; i++) {
            console.log(`${i}: ${todo[i]}`);
        }
        console.log("**********");
    }
    else if(userInput==="new" || userInput==="add")
    {
        let newTodo=prompt("What would you like to add?");
        todo.push(newTodo);
        console.log(`${newTodo} has been added to the list`);
    }
    else if(userInput==="delete")
    {
        let index = parseInt(prompt("Ok! Enter an index to delete"));
        if(!Number.isNaN(index))
        {
            let deletedTodo = todo.splice(index,1);
            console.log(`Okay!! Deleted ${deletedTodo[0]}`);
        }
        else{
            console.log("Invalid Index");
        }
    }
    userInput = prompt("What would you like to do?");
}
console.log("Okay!! you quit the app");