const todoId = location.hash.substring(1)
const textElement = document.querySelector("#todo-title")
const completedElement = document.querySelector("#todo-body")
const removeBtn = document.querySelector('#removeBtn')
const todos = getSavedTodos()
const todo = todos.find(function (todo) {
    return todo.id === todoId;
})
if (todo === undefined) {
    location.assign('/index.html')
}
textElement.value = todo.text;
completedElement.value = todo.completed;
textElement.addEventListener('input', (e) => {
    todo.text = e.target.value
    saveTodos(todos)
})
completedElement.addEventListener('input', (e) => {
    todo.completed = e.target.value
    saveTodos(todos)
})
removeBtn.addEventListener('click', (e) => {
    removeTodo(todo.id)
    saveTodos(todos)
    location.assign("/index.html")
})