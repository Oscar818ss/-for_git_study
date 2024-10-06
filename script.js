const redRange = document.getElementById('redRange');
const greenRange = document.getElementById('greenRange');
const blueRange = document.getElementById('blueRange');

const redValue = document.getElementById('redValue');
const greenValue = document.getElementById('greenValue');
const blueValue = document.getElementById('blueValue');

function updateBackgroundColor() {
    const red = redRange.value;
    const green = greenRange.value;
    const blue = blueRange.value;

    redValue.textContent = red;
    greenValue.textContent = green;
    blueValue.textContent = blue;

    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

redRange.addEventListener('input', updateBackgroundColor);
greenRange.addEventListener('input', updateBackgroundColor);
blueRange.addEventListener('input', updateBackgroundColor);
