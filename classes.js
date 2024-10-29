//select the first div
const DIV = document.querySelector('div');


// Assign the warning class to the 1st div
DIV.className = 'warning';

//Select the 2d division by class name
const ACTIVEDIV = document.querySelector('.active');

ACTIVEDIV.classList.add('hidden'); //add hidden class
ACTIVEDIV.classList.remove('hidden'); //remove hidden class

ACTIVEDIV.classList.toggle('hidden');

ACTIVEDIV.classList.replace('active', 'warning');
