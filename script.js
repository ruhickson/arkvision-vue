// script.js

// Debounce function to limit how often a function can be called
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Function to update URL with current slider values
function updateURL() {
    const params = new URLSearchParams();
    const sliders = document.querySelectorAll('input[type="range"]');
    sliders.forEach(slider => {
        params.set(slider.id, slider.value);
    });
    // Add view state to URL
    params.set('view', isSingleView ? 'single' : 'double');
    const newURL = `${window.location.pathname}?${params.toString()}`;
    window.history.replaceState({}, '', newURL);
}

// Function to restore slider values from URL
function restoreFromURL() {
    const params = new URLSearchParams(window.location.search);
    const sliders = document.querySelectorAll('input[type="range"]');
    sliders.forEach(slider => {
        const value = params.get(slider.id);
        if (value !== null) {
            slider.value = value;
            // Trigger input event to update visual effects
            slider.dispatchEvent(new Event('input'));
        }
    });
    
    // Restore view state
    const viewState = params.get('view');
    if (viewState === 'single') {
        isSingleView = true;
        viewToggle.textContent = 'Switch to Double View';
        circleGroups.forEach((group, index) => {
            group.style.display = index === 0 ? 'flex' : 'none';
        });
    }
}

// View toggle functionality
let isSingleView = false;
const viewToggle = document.getElementById('viewToggle');
const circlesContainer = document.getElementById('circlesContainer');
const circleGroups = document.querySelectorAll('.circle-group');

viewToggle.addEventListener('click', () => {
    isSingleView = !isSingleView;
    viewToggle.textContent = isSingleView ? 'Switch to Double View' : 'Switch to Single View';
    
    circleGroups.forEach((group, index) => {
        if (isSingleView) {
            group.style.display = index === 0 ? 'flex' : 'none';
        } else {
            group.style.display = 'flex';
        }
    });
    
    // Update URL when view changes
    updateURL();
});

// Optimized floater creation
function createFloaters(containerId, intensity, size) {
    const container = document.getElementById(containerId);
    container.innerHTML = ''; // Clear existing floaters

    // Increase the number of floaters significantly
    const numFloaters = Math.round(intensity * 2); // Changed from 0.1 to 2
    const fragment = document.createDocumentFragment();
    
    for (let i = 0; i < numFloaters; i++) {
        const floater = document.createElement('div');
        floater.className = 'floating-element';
        floater.style.width = `${size}px`;
        floater.style.height = `${size}px`;
        
        // Randomly position the floater within the circle
        const angle = Math.random() * 2 * Math.PI;
        const radius = Math.random() * 200;
        const x = 200 + radius * Math.cos(angle) - size / 2;
        const y = 200 + radius * Math.sin(angle) - size / 2;

        floater.style.left = `${x}px`;
        floater.style.top = `${y}px`;
        
        fragment.appendChild(floater);
        animateFloater(floater, x, y, radius, angle);
    }
    
    container.appendChild(fragment);
}

// Optimized floater animation
function animateFloater(floater, x, y, radius, angle) {
    // Give each floater slightly different movement characteristics
    const speed = 0.08 + Math.random() * 0.12; // Reduced from 0.2-0.5 to 0.08-0.2
    const deltaX = speed * Math.cos(angle);
    const deltaY = speed * Math.sin(angle);
    let animationFrameId;
    let currentAngle = angle;
    let wobblePhase = Math.random() * Math.PI * 2; // Random starting phase for wobble

    function move() {
        const currentX = parseFloat(floater.style.left);
        const currentY = parseFloat(floater.style.top);
        
        // Add gentle wobble to the movement (reduced intensity)
        wobblePhase += 0.008; // Reduced from 0.02 to 0.008
        const wobbleX = Math.sin(wobblePhase) * 0.2; // Reduced from 0.5 to 0.2
        const wobbleY = Math.cos(wobblePhase) * 0.2; // Reduced from 0.5 to 0.2
        
        // Calculate new position with wobble
        let newX = currentX + deltaX + wobbleX;
        let newY = currentY + deltaY + wobbleY;

        // Bounce off the edges of the circle with slight angle change
        const distanceFromCenter = Math.sqrt(Math.pow(newX - 200, 2) + Math.pow(newY - 200, 2));
        if (distanceFromCenter > radius) {
            // Calculate bounce angle
            const bounceAngle = Math.atan2(newY - 200, newX - 200);
            currentAngle = bounceAngle + (Math.random() * 0.2 - 0.1); // Reduced random variation
            
            // Move back inside the circle
            newX = 200 + (radius - 5) * Math.cos(currentAngle);
            newY = 200 + (radius - 5) * Math.sin(currentAngle);
            
            // Update movement direction
            floater.style.left = `${newX}px`;
            floater.style.top = `${newY}px`;
        } else {
            floater.style.left = `${newX}px`;
            floater.style.top = `${newY}px`;
        }

        animationFrameId = requestAnimationFrame(move);
    }

    move();

    // Clean up animation when floater is removed
    floater.addEventListener('remove', () => {
        cancelAnimationFrame(animationFrameId);
    });
}

// Event handlers for sliders
document.getElementById('colorSlider1').addEventListener('input', function() {
    const value = this.value;
    const colorValue = Math.round((255 * (100 - value)) / 100);
    document.getElementById('circle1').style.backgroundColor = `rgb(${colorValue},${colorValue},${colorValue})`;
    updateURL();
});

document.getElementById('colorSlider2').addEventListener('input', function() {
    const value = this.value;
    const colorValue = Math.round((255 * (100 - value)) / 100);
    document.getElementById('circle2').style.backgroundColor = `rgb(${colorValue},${colorValue},${colorValue})`;
    updateURL();
});

document.getElementById('blurSlider1').addEventListener('input', function() {
    document.getElementById('circle1').style.filter = `blur(${this.value}px)`;
    updateURL();
});

document.getElementById('blurSlider2').addEventListener('input', function() {
    document.getElementById('circle2').style.filter = `blur(${this.value}px)`;
    updateURL();
});

document.getElementById('curtainSlider1').addEventListener('input', function() {
    const value = this.value;
    // Calculate radius based on the circle's diameter (200% to ensure full coverage)
    const radius = value * 2;
    document.getElementById('veil1').style.clipPath = `circle(${radius}% at 50% 0)`;
    updateURL();
});

document.getElementById('curtainSlider2').addEventListener('input', function() {
    const value = this.value;
    // Calculate radius based on the circle's diameter (200% to ensure full coverage)
    const radius = value * 2;
    document.getElementById('veil2').style.clipPath = `circle(${radius}% at 50% 0)`;
    updateURL();
});

document.getElementById('warpSlider1').addEventListener('input', function() {
    document.getElementById('text1').style.transform = `scaleX(${1 + this.value / 100}) scaleY(${1 - this.value / 200})`;
    updateURL();
});

document.getElementById('warpSlider2').addEventListener('input', function() {
    document.getElementById('text2').style.transform = `scaleX(${1 + this.value / 100}) scaleY(${1 - this.value / 200})`;
    updateURL();
});

// Debounced floater creation
const debouncedCreateFloaters = debounce((containerId, intensity, size) => {
    createFloaters(containerId, intensity, size);
}, 100);

document.getElementById('floatersSlider1').addEventListener('input', function() {
    const intensity = this.value;
    const size = document.getElementById('sizeSlider1').value;
    debouncedCreateFloaters('floaters1', intensity, size);
    updateURL();
});

document.getElementById('floatersSlider2').addEventListener('input', function() {
    const intensity = this.value;
    const size = document.getElementById('sizeSlider2').value;
    debouncedCreateFloaters('floaters2', intensity, size);
    updateURL();
});

document.getElementById('sizeSlider1').addEventListener('input', function() {
    const size = this.value;
    const intensity = document.getElementById('floatersSlider1').value;
    debouncedCreateFloaters('floaters1', intensity, size);
    updateURL();
});

document.getElementById('sizeSlider2').addEventListener('input', function() {
    const size = this.value;
    const intensity = document.getElementById('floatersSlider2').value;
    debouncedCreateFloaters('floaters2', intensity, size);
    updateURL();
});

// Reset functionality
const resetButton = document.getElementById('resetButton');
const defaultValues = {
    colorSlider1: 50,
    colorSlider2: 50,
    blurSlider1: 0,
    blurSlider2: 0,
    curtainSlider1: 0,
    curtainSlider2: 0,
    warpSlider1: 0,
    warpSlider2: 0,
    floatersSlider1: 0,
    floatersSlider2: 0,
    sizeSlider1: 10,
    sizeSlider2: 10
};

function resetToDefaults() {
    // Reset all sliders to their default values
    Object.entries(defaultValues).forEach(([id, value]) => {
        const slider = document.getElementById(id);
        slider.value = value;
        // Trigger the input event to update the visual effects
        slider.dispatchEvent(new Event('input'));
    });
    // Clear URL parameters after reset
    window.history.replaceState({}, '', window.location.pathname);
}

resetButton.addEventListener('click', resetToDefaults);

// Restore settings from URL when page loads
document.addEventListener('DOMContentLoaded', restoreFromURL);

// Save configuration button functionality
const saveConfigButton = document.getElementById('saveConfigButton');

saveConfigButton.addEventListener('click', async () => {
    try {
        await navigator.clipboard.writeText(window.location.href);
        saveConfigButton.textContent = 'Copied!';
        saveConfigButton.classList.add('copied');
        
        // Reset button text after 2 seconds
        setTimeout(() => {
            saveConfigButton.textContent = 'Share';
            saveConfigButton.classList.remove('copied');
        }, 2000);
    } catch (err) {
        console.error('Failed to copy URL:', err);
        saveConfigButton.textContent = 'Failed to copy';
        setTimeout(() => {
            saveConfigButton.textContent = 'Share';
        }, 2000);
    }
});
