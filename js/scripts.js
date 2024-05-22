document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        
        // Clear previous error messages
        clearErrors();

        // Validate inputs
        let valid = true;

        if (nameInput.value.trim() === '') {
            showError(nameInput, 'Name is required');
            valid = false;
        }

        if (!validateEmail(emailInput.value)) {
            showError(emailInput, 'Invalid email format');
            valid = false;
        }

        if (messageInput.value.trim() === '') {
            showError(messageInput, 'Message is required');
            valid = false;
        }

        if (valid) {
            // Submit form or show success message
            form.submit();
            // Alternatively, display a success message without submitting
            // showSuccess('Your feedback has been submitted successfully!');
        }
    });

    function showError(input, message) {
        const formGroup = input.parentElement;
        const error = document.createElement('div');
        error.className = 'error-message';
        error.style.color = 'red';
        error.textContent = message;
        formGroup.appendChild(error);
    }

    function clearErrors() {
        const errors = document.querySelectorAll('.error-message');
        errors.forEach(function (error) {
            error.remove();
        });
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    function showSuccess(message) {
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.style.color = 'green';
        successMessage.textContent = message;
        form.appendChild(successMessage);
        setTimeout(function () {
            successMessage.remove();
        }, 5000);
    }
});
