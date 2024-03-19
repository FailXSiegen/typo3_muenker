// Warten auf das vollständige Laden des DOMs
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');
    // Auswahl aller Radio-Buttons innerhalb von Formularen mit dem spezifischen data-powermail-ajax="true" Attribut
    document.querySelectorAll('form[data-powermail-ajax="true"] input[type="radio"]').forEach(function(radio) {
        // Hinzufügen eines Event Listeners für das 'change' Event
        radio.addEventListener('change', function() {
            // Finden des Submit-Buttons im selben Formular wie der Radio-Button
            let submitButton = this.form.querySelector('input[type="submit"]');
            console.log(submitButton);
            // Simulieren eines Klick-Events auf den Submit-Button
            if(submitButton) {
                submitButton.click();
            }
        });
    });
});