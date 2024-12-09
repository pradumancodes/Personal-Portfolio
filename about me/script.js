document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.querySelector('.text');
    const name = 'Praduman Sharma';
    let index = 0;

    function typeEffect() {
        if (index < name.length) {
            textElement.textContent += name.charAt(index);
            index++;
            setTimeout(typeEffect, 150);
        }
    }

    typeEffect();
});
