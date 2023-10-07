function createFallingNumbers() {
    const numberBackground = document.querySelector('.number-background');

    for (let i = 0; i < 100; i++) {
        const number = document.createElement('span');
        number.classList.add('falling-number');
        number.textContent = Math.floor(Math.random() * 10); 
        number.style.left = Math.random() * 100 + 'vw'; 
        number.style.animationDuration = '0.3s'; 
        number.style.animationDelay = Math.random() * 5 + 's'; 
        number.style.opacity = 0.7; 
        number.style.top = '-30px'; 
        numberBackground.appendChild(number);
    }
}

window.addEventListener('load', () => {
    createFallingNumbers();
});
