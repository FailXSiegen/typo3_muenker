
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');
    document.querySelectorAll('form[data-powermail-ajax="true"] input[type="radio"]').forEach(function(radio) {
        radio.addEventListener('change', function() {
            let submitButton = this.form.querySelector('input[type="submit"]');
            if(submitButton) {
                submitButton.click();
            }
        });
    });
});