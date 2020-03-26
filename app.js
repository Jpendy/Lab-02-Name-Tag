console.log('hello world');

const name = document.getElementById('name');

name.style.color = 'blue';
name.textContent = 'THE ROCK';
name.style.fontSize = '30px';
name.style.fontFamily = 'fantasy';


//footer = document.getElementsByTagName('footer');

const input = document.createElement('input');


const myButton = document.getElementById('myButton');

myButton.addEventListener('click', function(){
    name.textContent = 'I am the Rockkk';
    //console.log('change the name!');
});