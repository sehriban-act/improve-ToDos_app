const todos = [{
    text: 'Order cat food',
    completed: false
}, {
    text: 'Clean kitchen',
    completed: true
}, {
    text: 'Buy food',
    completed: false
}, {
    text: 'Do work',
    completed: true
}, {
    text: 'Exercise',
    completed: true
}]
const deleteTodo = function (todos, todoText) {
    const index = todos.findIndex(function (todo) {
        return todo.text.toLowerCase() === todoText.toLowerCase()
    })
    if (index > -1) {
        todos.splice(index, 1)
    }
}
deleteTodo(todos, "do work")
console.log(todos);

const getThingsToDo = function (todos) {
    return todos.filter(function (todo) {
        return !todo.completed

    })
}

console.log(getThingsToDo(todos));