let commmand;
let todoList = [];
let display;
let deleteTodo;

do {
    commmand = prompt("Choose one option\n\t1. New to add a todo\n\t2. List to see all the todos\n\t3. Delete to remove a specific todo\n\t4. Quit to exit de program");

    switch(commmand) {
        case '1':
            let addtodo = prompt("Add a new todo")
            todoList.push(addtodo);
            alert(addtodo + " has been added to the list");
        break;
        
        case '2':

            if (todoList.length===0) {
                alert("********* TODO LIST *********\n\tnothing todo today");
            }else{
                display = "\t1. "+todoList[0] + "\n"
                for (let i=1; i<todoList.length; i++){
                    display += "\t"+(i+1) + ". " +todoList[i]+ "\n";
                }
                alert("********* TODO LIST *********\n"+display);
            }
            break;
        
        case '3': 
            deleteTodo = parseInt(prompt("Delete to remove a specific todo"));
            alert(todoList[deleteTodo-1] +" has been deleted to the list"); 
            todoList.splice((deleteTodo-1), 1);
            break;
        
        case '4': 
            alert("Quit to exit de program");
            break;
            
        default:
            alert("Choose an option between 1-4");
    }
}while(commmand != '4');
