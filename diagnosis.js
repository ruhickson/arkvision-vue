// Function to analyze vision parameters for a single eye
function analyzeEye(params, eyeNumber) {
    const results = [];

    // Get slider values for the specified eye
    const brightness = parseInt(params.get(`colorSlider${eyeNumber}`) || '100');
    const blur = parseInt(params.get(`blurSlider${eyeNumber}`) || '0');
    const blurUpClose = parseInt(params.get(`blurUpCloseSlider${eyeNumber}`) || '0');
    const blurFarAway = parseInt(params.get(`blurFarAwaySlider${eyeNumber}`) || '0');
    const curtain = parseInt(params.get(`curtainSlider${eyeNumber}`) || '0');
    const floaters = parseInt(params.get(`floatersSlider${eyeNumber}`) || '0');
    const glaucomaState = params.get(`glaucoma${eyeNumber}`) || '0000000000000000';

    // Analyze patterns and provide diagnosis
    if (blurUpClose > 5 && blurFarAway < 3) {
        results.push({
            condition: "Presbyopia",
            confidence: Math.min(blurUpClose * 10, 95),
            description: "Difficulty focusing on close objects, common in people over 40."
        });
    }

    if (blurFarAway > 5 && blurUpClose < 3) {
        results.push({
            condition: "Myopia (Nearsightedness)",
            confidence: Math.min(blurFarAway * 10, 95),
            description: "Difficulty seeing distant objects clearly."
        });
    }

    if (blur > 5 && blurUpClose > 3 && blurFarAway > 3) {
        results.push({
            condition: "Astigmatism",
            confidence: Math.min(blur * 10, 95),
            description: "Blurred vision at all distances due to irregular corneal shape."
        });
    }

    if (curtain > 50) {
        results.push({
            condition: "Retinal Detachment",
            confidence: Math.min(curtain, 95),
            description: "Partial or complete loss of vision in one area, requires immediate medical attention."
        });
    }

    if (floaters > 50) {
        results.push({
            condition: "Vitreous Floaters",
            confidence: Math.min(floaters, 95),
            description: "Small specks or clouds moving in your field of vision."
        });
    }

    // Count active glaucoma cells
    const activeGlaucomaCells = (glaucomaState.match(/1/g) || []).length;
    if (activeGlaucomaCells > 4) {
        results.push({
            condition: "Glaucoma",
            confidence: Math.min(activeGlaucomaCells * 10, 95),
            description: "Progressive damage to the optic nerve, often associated with increased eye pressure."
        });
    }

    if (brightness < 50) {
        results.push({
            condition: "Cataracts",
            confidence: Math.min((100 - brightness) * 2, 95),
            description: "Clouding of the eye's natural lens, causing reduced brightness and clarity."
        });
    }

    return results;
}

// Function to display diagnosis results
function displayResults() {
    const params = new URLSearchParams(window.location.search);
    const resultsContainer = document.getElementById('diagnosisResults');
    
    // Analyze both eyes
    const leftEyeResults = analyzeEye(params, 1);
    const rightEyeResults = analyzeEye(params, 2);

    let html = '';

    // Display left eye results
    html += `
        <div class="diagnosis-result">
            <h3>Left Eye Analysis</h3>
    `;
    
    if (leftEyeResults.length === 0) {
        html += `
            <p>No significant visual issues detected in the left eye. However, this is not a replacement for professional medical advice.</p>
        `;
    } else {
        // Sort results by confidence
        leftEyeResults.sort((a, b) => b.confidence - a.confidence);
        
        leftEyeResults.forEach(result => {
            html += `
                <div class="diagnosis-result">
                    <h4>${result.condition}</h4>
                    <p>${result.description}</p>
                    <div class="confidence-meter">
                        <div class="confidence-level" style="width: ${result.confidence}%"></div>
                    </div>
                    <p>Confidence: ${result.confidence}%</p>
                </div>
            `;
        });
    }
    html += '</div>';

    // Display right eye results
    html += `
        <div class="diagnosis-result">
            <h3>Right Eye Analysis</h3>
    `;
    
    if (rightEyeResults.length === 0) {
        html += `
            <p>No significant visual issues detected in the right eye. However, this is not a replacement for professional medical advice.</p>
        `;
    } else {
        // Sort results by confidence
        rightEyeResults.sort((a, b) => b.confidence - a.confidence);
        
        rightEyeResults.forEach(result => {
            html += `
                <div class="diagnosis-result">
                    <h4>${result.condition}</h4>
                    <p>${result.description}</p>
                    <div class="confidence-meter">
                        <div class="confidence-level" style="width: ${result.confidence}%"></div>
                    </div>
                    <p>Confidence: ${result.confidence}%</p>
                </div>
            `;
        });
    }
    html += '</div>';

    // Add important note
    html += `
        <div class="diagnosis-result">
            <h3>Important Note</h3>
            <p>This is a preliminary analysis based on your input. It is not a replacement for professional medical diagnosis. Please consult with an eye care professional for proper evaluation and treatment.</p>
        </div>
    `;

    resultsContainer.innerHTML = html;
}

// Display results when the page loads
document.addEventListener('DOMContentLoaded', displayResults); 