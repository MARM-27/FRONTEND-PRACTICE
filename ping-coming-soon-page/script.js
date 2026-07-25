const form = document.querySelector('form');
const button = document.querySelector('button');
const emailInput = document.querySelector('#email');
const errorMsg = document.querySelector('.error-msg');

button.addEventListener('click', (event) => {
    event.preventDefault();
    if (!emailInput.validity.valid) {
        emailInput.style.border = "0.1rcap solid hsl(354, 100%, 66%)";
        errorMsg.classList.add('show');
    } else {
        // Reset border
        emailInput.style.border = "0.1rem solid black"; 
        // Hide the error message by removing the 'show' class
        errorMsg.classList.remove('show');
        
        console.log("Valid email submitted:", emailInput.value);
        emailInput.value = "";
    }
});