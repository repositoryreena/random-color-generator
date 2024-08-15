function getRandomColor() {
    // Generate a random number between 0 and 0xffffff
    const randomColor = Math.floor(Math.random() * 0xffffff);
    
    // Convert the number to a hexadecimal string and pad with zeros
    const hexColor = randomColor.toString(16).padStart(6, '0');
    
    // Format the color as a hex color code
    return `#${hexColor}`;
}

function createColorDiv() {
    const color = getRandomColor();
    const div = document.createElement('div');
    div.className = 'grid-item';
    div.style.backgroundColor = color;
    div.textContent = color;
    return div;
}

document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.grid-container');
    
    // Create 30 divs with random colors and append them to the container
    for (let i = 0; i < 30; i++) {
        container.appendChild(createColorDiv());
    }
});
