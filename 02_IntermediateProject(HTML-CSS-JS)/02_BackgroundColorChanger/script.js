const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

// console.log(buttons)
// console.log(body)

buttons.forEach(function (button){
    console.log(button);
    button.addEventListener('click', function(event){
        console.log(event);
        console.log(event.target);
        if(event.target.id === 'grey'){
            body.style.backgroundColor = event.target.id
            body.style.color = 'black';
        }
        if(event.target.id === 'yellow'){
            body.style.backgroundColor = event.target.id
            body.style.color = 'black';
        }
        if(event.target.id === 'white'){
            body.style.backgroundColor = event.target.id
            body.style.color = 'black';
        }
        if(event.target.id === 'blue'){
            body.style.backgroundColor = event.target.id
            body.style.color = 'black';
        }
        if(event.target.id === 'orange'){
            body.style.backgroundColor = event.target.id
            body.style.color = 'black';
        }
    });
});