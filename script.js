const emailInput = document.querySelector('#email');
const errorMessage = document.querySelector('.error-message');
const formButton = document.querySelector('.send-button');
const form = document.querySelector('form'); 

formButton.addEventListener('click', function (e) {
    e.preventDefault();
const emailValue = emailInput.value.trim();

if (emailValue === '') {
    errorMessage.textContent = "Email cannot be empty";
        emailInput.classList.add('input-error');
} else if (!emailValue.includes('@')) {
    errorMessage.textContent = "Please provide a valid email"
        emailInput.classList.add('input-error');
} else {
    errorMessage.textContent = "";
        emailInput.classList.remove('input-error');
        alert('Email submitted!');
        emailInput.value = ''; 
        form.submit();        
}
})

