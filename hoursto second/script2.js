// Get elements from the page
const hourInput = document.getElementById('hour');
const convertBtn = document.getElementById('convertBtn');
const resetBtn = document.getElementById('resetBtn');
const resultEl = document.getElementById('result');

// Convert hours to seconds (1 hour = 3600 seconds)
function hoursToSeconds(hours) {
    return hours * 3600;
}

// Show a message in the result area (normal or error)
function showMessage(text, isError = false) {
    resultEl.textContent = text;
    resultEl.style.color = isError ? 'crimson' : '';
}

// When user clicks Convert
function handleConvert() {
    const value = hourInput.value.trim();

    // Check empty input
    if (value === '') {
        showMessage('Please enter hours.', true);
        return;
    }

    // Convert to number
    const hours = parseFloat(value);

    // Check valid number
    if (Number.isNaN(hours)) {
        showMessage('Please enter a valid number.', true);
        return;
    }

    // Optional: do not allow negative numbers
    if (hours < 0) {
        showMessage('Please enter a non-negative number.', true);
        return;
    }

    // Calculate and show result
    const seconds = hoursToSeconds(hours);
    showMessage(seconds + ' seconds');
}

// When user clicks Reset
function handleReset() {
    hourInput.value = '';
    showMessage('Result will appear here');
    hourInput.focus();
}

// Wire up buttons and Enter key
convertBtn.addEventListener('click', handleConvert);
resetBtn.addEventListener('click', handleReset);
hourInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') handleConvert();
});
