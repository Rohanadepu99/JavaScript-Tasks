let counter = 0;

document.getElementById('incrementButton').addEventListener('click', function() {
    counter++;
    document.getElementById('counterValue').textContent = counter;
});

document.getElementById('decrementButton').addEventListener('click', function() {
    counter--;
    document.getElementById('counterValue').textContent = counter;
});

document.getElementById('resetButton').addEventListener('click', function() {
    counter = 0;
    document.getElementById('counterValue').textContent = counter;
});