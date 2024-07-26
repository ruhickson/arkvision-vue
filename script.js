// script.js
function createFloaters(containerId, intensity, size) {
    const container = document.getElementById(containerId);
    container.innerHTML = ''; // Clear existing floaters

    const numFloaters = Math.round(intensity * 0.1);
    for (let i = 0; i < numFloaters; i++) {
        const floater = document.createElement('div');
        floater.className = 'floating-element';
        floater.style.width = `${size}px`;
        floater.style.height = `${size}px`;
        container.appendChild(floater);

        // Randomly position the floater within the circle
        const angle = Math.random() * 2 * Math.PI;
        const radius = Math.random() * 200;
        const x = 200 + radius * Math.cos(angle) - size / 2; // Center position adjusted for floater size
        const y = 200 + radius * Math.sin(angle) - size / 2;

        floater.style.left = `${x}px`;
        floater.style.top = `${y}px`;

        // Animate floater movement
        animateFloater(floater, x, y, radius, angle);
    }
}

function animateFloater(floater, x, y, radius, angle) {
    const speed = 0.5;
    const deltaX = speed * Math.cos(angle);
    const deltaY = speed * Math.sin(angle);

    function move() {
        const currentX = parseFloat(floater.style.left);
        const currentY = parseFloat(floater.style.top);
        let newX = currentX + deltaX;
        let newY = currentY + deltaY;

        // Bounce off the edges of the circle
        if (Math.sqrt(Math.pow(newX - 200, 2) + Math.pow(newY - 200, 2)) > radius) {
            floater.style.left = `${currentX - deltaX}px`;
            floater.style.top = `${currentY - deltaY}px`;
        } else {
            floater.style.left = `${newX}px`;
            floater.style.top = `${newY}px`;
        }

        requestAnimationFrame(move);
    }

    move();
}

document.getElementById('colorSlider1').addEventListener('input', function() {
    var value = 100 - this.value;
    var colorValue = Math.round((255 * value) / 100);
    var color = 'rgb(' + colorValue + ',' + colorValue + ',' + colorValue + ')';

    document.getElementById('circle1').style.backgroundColor = color;
});

document.getElementById('colorSlider2').addEventListener('input', function() {
    var value = 100 - this.value;
    var colorValue = Math.round((255 * value) / 100);
    var color = 'rgb(' + colorValue + ',' + colorValue + ',' + colorValue + ')';

    document.getElementById('circle2').style.backgroundColor = color;
});

document.getElementById('blurSlider1').addEventListener('input', function() {
    var value = this.value;
    document.getElementById('circle1').style.filter = 'blur(' + value + 'px)';
});

document.getElementById('blurSlider2').addEventListener('input', function() {
    var value = this.value;
    document.getElementById('circle2').style.filter = 'blur(' + value + 'px)';
});

document.getElementById('curtainSlider1').addEventListener('input', function() {
    var value = this.value;
    document.getElementById('veil1').style.height = value + '%';
});

document.getElementById('curtainSlider2').addEventListener('input', function() {
    var value = this.value;
    document.getElementById('veil2').style.height = value + '%';
});

document.getElementById('warpSlider1').addEventListener('input', function() {
    var value = this.value;
    document.getElementById('text1').style.transform = `scaleX(${1 + value / 100}) scaleY(${1 - value / 200})`;
});

document.getElementById('warpSlider2').addEventListener('input', function() {
    var value = this.value;
    document.getElementById('text2').style.transform = `scaleX(${1 + value / 100}) scaleY(${1 - value / 200})`;
});

document.getElementById('floatersSlider1').addEventListener('input', function() {
    var intensity = this.value;
    var size = document.getElementById('sizeSlider1').value;
    createFloaters('floaters1', intensity, size);
});

document.getElementById('floatersSlider2').addEventListener('input', function() {
    var intensity = this.value;
    var size = document.getElementById('sizeSlider2').value;
    createFloaters('floaters2', intensity, size);
});

document.getElementById('sizeSlider1').addEventListener('input', function() {
    var size = this.value;
    var intensity = document.getElementById('floatersSlider1').value;
    createFloaters('floaters1', intensity, size);
});

document.getElementById('sizeSlider2').addEventListener('input', function() {
    var size = this.value;
    var intensity = document.getElementById('floatersSlider2').value;
    createFloaters('floaters2', intensity, size);
});
