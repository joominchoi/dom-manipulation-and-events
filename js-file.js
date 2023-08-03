const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const redText = document.createElement('a');
redText.classList.add('redText');
redText.textContent = "Hey I'm red!"
redText.style.color = "Red";

container.appendChild(redText);

const blueText = document.createElement('h3')
blueText.classList.add('blueText')
blueText.textContent = "I'm a blue h3!"
blueText.style.color = "Blue";

container.appendChild(blueText)

const div = document.createElement('div');

const insideDiv = document.createElement('h1')
insideDiv.classList.add('insideDiv')
insideDiv.textContent = "I'm in a div"

div.appendChild(insideDiv)

const meToo = document.createElement('p')
meToo.classList.add('meToo')
meToo.textContent = 'ME TOO'

div.appendChild(meToo)

container.appendChild(div)