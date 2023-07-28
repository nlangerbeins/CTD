const container = document.querySelector('#container');

const content = document.createElement('div');
// content.classList.add('content');
content.textContent = 'this is some text'


const red = document.createElement('p');
red.textContent = 'Hey I\'m red';

const blue = document.createElement('h3');
blue.textContent = 'I\'m a blue h3!'

const pink = document.createElement('div');
pink.style.background = 'pink';
pink.style.border = '1px solid black'

const pinkHeader = document.createElement('h1');
pinkHeader.textContent = 'I\'m in a div';
pink.appendChild(pinkHeader)

const insidePink = document.createElement('p');
insidePink.textContent = 'ME TOO!';
pink.appendChild(insidePink)

container.appendChild(content);
container.appendChild(red);
container.appendChild(blue);
container.appendChild(pink)

const btn = document.querySelector('button');
btn.addEventListener('click', function(e) {
    console.log(e.target);
    e.target.style.background = 'blue'
})