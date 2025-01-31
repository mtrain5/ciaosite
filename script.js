const circleContainer = document.querySelector('.circle-container');

circleContainer.addEventListener('mousemove', (event) => {
    const x = event.clientX;
    const y = event.clientY;

    const centerX = circleContainer.offsetLeft + circleContainer.offsetWidth / 2;
    const centerY = circleContainer.offsetTop + circleContainer.offsetHeight / 2;
    
    const deltaX = x - centerX;
    const deltaY = y - centerY;
    const angle = Math.atan2(deltaY, deltaX) * 180 / Math.PI;
    
    circleContainer.style.transform = `rotate(${angle}deg)`;
});
