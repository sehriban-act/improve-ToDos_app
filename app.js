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
// console.log(todos);

const getThingsToDo = function (todos) {
    return todos.filter(function (todo) {
        return !todo.completed;

    })
}

// console.log(getThingsToDo(todos));
const sortInCompleted = function (todos) {
    todos.sort(function (a, b) {
        if (!a.completed && b.completed) {
            return -1
        } else if (!b.completed && a.completed) {
            return 1
        } else {
            return 0
        }

    })

}
sortInCompleted(todos)
// console.log(todos);

// ---DOM--

// const pTags = document.querySelectorAll('p');
// console.log(pTags);
// pTags.forEach((p) => {
//     if (p.textContent.includes('the')) {
//         p.remove()
//     }

// })



const newParagraphs = document.createElement('p')
const body = document.querySelector('body')
body.appendChild(newParagraphs)
newParagraphs.textContent = `you have ${getThingsToDo.length} thing(s) to do`
todos.forEach((todo) => {
    const p = document.createElement('p')
    p.textContent = todo.text;
    body.appendChild(p)
})


document.getElementById('addBtn').addEventListener('click', (e) => {
    e.target.textContent = "add a Todo"
})
document.getElementById('removeAll').addEventListener('click', () => {
    document.querySelectorAll("p").forEach((todo) => {
        todo.remove()
    })
})

document.querySelector("#search-text").addEventListener("input", (e) => {
    console.log(e.target.value)
})