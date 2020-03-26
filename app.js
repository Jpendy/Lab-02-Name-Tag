console.log('hello world');

const name = document.getElementById('name');

name.style.color = 'blue';
name.textContent = 'I AM THE ROCK';
name.style.fontSize = '30px';
name.style.fontFamily = 'fantasy';


// const footer = document.getElementsByTagName('footer');

// const input = document.createElement('input');
// footer[0].appendChild(input);

const myButton = document.getElementById('myButton');

myButton.addEventListener('click', function(){
    name.textContent = 'I am the Pebble';
    name.style.color = 'steelblue';
    console.log('change the name!');

});

