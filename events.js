const P = document.querySelector('p');
const BUTTON = document.querySelector('button');

//Function to modify the text content of the paragraph

const CHANGETEXT = () => {
    
    P.textContent = "I changed because of an event listener";
}

const ALERTTEXT = () => {
    alert('Will I alert?');
}

//Listen for the click event
BUTTON.addEventListener('click', CHANGETEXT);
BUTTON.addEventListener('click', ALERTTEXT);

//Remove alert function from the button
BUTTON.removeEventListener('click', ALERTTEXT);