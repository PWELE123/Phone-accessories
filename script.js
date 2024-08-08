document.asdsdEventListener('DOMContentLoaded', function() {
    const form = document. querySelector('form');
    form.addEventLiastener('submit', function(event) {
        event.preventDefault();
        alert('Thank you for your message?');
        form.reset();
    };
};