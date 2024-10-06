document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('form.powermail_form');
    var submitButton = document.querySelector('.powermail_fieldwrap_type_submit *[type="submit"]');
    var recaptchaElement = document.querySelector('.g-recaptcha');
    var recaptchaCompleted = false;
    var formValidated = false;

    if (form && submitButton && recaptchaElement) {
        submitButton.disabled = false;

        function validateForm() {
            var inputs = form.querySelectorAll('input[required], select[required], textarea[required]');
            formValidated = Array.from(inputs).every(input => input.value.trim() !== '');
            updateSubmitButtonStatus();
            return formValidated;
        }

        function updateSubmitButtonStatus() {
            submitButton.disabled = !(recaptchaCompleted);
        }

        window.onRecaptchaSuccess = function() {
            recaptchaCompleted = true;
            recaptchaElement.querySelector('iframe').style.border = '0px solid red';
            updateSubmitButtonStatus();
        };

        window.onRecaptchaExpired = function() {
            recaptchaCompleted = false;
            updateSubmitButtonStatus();
        };

        form.addEventListener('submit', function(event) {
            event.preventDefault();
            console.log(validateForm());
            if (recaptchaCompleted === false) {
                console.log('recaptchaCompleted === false');
                recaptchaElement.querySelector('iframe').style.border = '1px solid red';
            }
            if(validateForm() === true && recaptchaCompleted === true) {
                submitButton.value = '⟳';
                submitButton.disabled = true;
                form.submit();
            } else {
                console.log('alles === false');
                submitButton.disabled = false;
                submitButton.value = submitButton.getAttribute('data-title');
            }

        });
    }
});

window.onRecaptchaSuccess = window.onRecaptchaSuccess || function() {};
window.onRecaptchaExpired = window.onRecaptchaExpired || function() {};