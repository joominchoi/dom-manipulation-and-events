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