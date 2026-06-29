// Get DOM elements
const yearsInput = document.getElementById('years');
const convertBtn = document.getElementById('convertBtn');
const resetBtn = document.getElementById('resetBtn');
const resultDisplay = document.getElementById('result');

// Convert age to days
convertBtn.addEventListener('click', function () {
    const age = parseFloat(yearsInput.value);

    // Validate input
    if (isNaN(age) || age < 0) {
        resultDisplay.textContent = 'Please enter a valid age!';
        resultDisplay.style.color = 'rgb(244, 67, 54)';
        return;
    }

    // Calculate days (365 days per year)
    const days = Math.round(age * 365);

    resultDisplay.textContent = `${age} years = ${days} days`;
    resultDisplay.style.color = 'rgb(76, 175, 80)';
});

// Reset form
resetBtn.addEventListener('click', function () {
    yearsInput.value = '';
    resultDisplay.textContent = 'Result will appear here';
    resultDisplay.style.color = 'rgb(170, 167, 164)';
});

// Allow Enter key to trigger conversion
yearsInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        convertBtn.click();
    }
});