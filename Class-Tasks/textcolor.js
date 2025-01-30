function generateRandomColor() {
    // Generate a random hex color code
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
}

document.getElementById('generateButton').addEventListener('click', function() {
    const randomColor = generateRandomColor();
    document.getElementById('colorCode').textContent = randomColor;
    document.getElementById('colorDisplay').style.backgroundColor = randomColor;
});