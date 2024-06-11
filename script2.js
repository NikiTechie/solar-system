document.querySelectorAll('.planet').forEach(planet => {
    planet.addEventListener('mouseover', () => {
        planet.style.transform = 'scale(1.5)';
    });
    planet.addEventListener('mouseout', () => {
        planet.style.transform = 'scale(1)';
    });
});
