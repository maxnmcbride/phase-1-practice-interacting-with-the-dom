// prevent default
const submitForm = document.querySelector('#comment-form')
// console.log(document.querySelector('#submit'));
submitForm.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(event.target.comment);
});

function commentList(comment) {
    let p = document.createElement('p');
    document.getElementById('#list').appendChild(p)
    p.textContent = comment;
    p.textContent = '${comment}';
    // console.log(document.getElementsByTagName('h3').append(p));
    // p.textContent = comment;
    // p.textContent = `${comment}`
    // console.log(document.getElementsByTagName('h3').append(p))
    // console.log(comment)
}



// function buildTodo(todo) {
//     let p = document.createElement("p");
//     let btn = document.createElement("button");
//     btn.addEventListener("click", handleDelete)
//     btn.textContent = 'x'; 
//     p.textContent = todo;
//     p.textContent = `${todo} `;
//     p.appendChild(btn);
//     document.querySelector('#tasks').appendChild(p)
//   }