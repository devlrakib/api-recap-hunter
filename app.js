// !33-4 Load More Data, More APIs, Send Data To Function
function loadData(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then (response => response.json())
    .then (data => console.log(data))
}

function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then (res => res.json())
    .then (data => console.log(data))
}