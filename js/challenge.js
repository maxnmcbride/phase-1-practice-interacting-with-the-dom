// prevent default
const submitButton = document.querySelector('#submit')
// console.log(document.querySelector('#submit'));
submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    // console.log(event);

});
