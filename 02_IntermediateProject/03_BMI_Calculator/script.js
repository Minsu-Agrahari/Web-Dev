const form = document.querySelector('form');

form.addEventListener('submit', function (data) {
    data.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');
    const resultInfo = document.querySelector('#resultInfo'); // ✅ select it

    if (isNaN(height) || height <= 0) {
        result.innerHTML = `Enter a valid height`;
        resultInfo.innerHTML = ""; // clear any old message
    } else if (isNaN(weight) || weight <= 0) {
        result.innerHTML = `Enter a valid weight`;
        resultInfo.innerHTML = ""; // clear any old message
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        result.innerHTML = `Your BMI is ${bmi}`;

        // Convert bmi to number for comparison
        const bmiValue = parseFloat(bmi);

        if (bmiValue < 18.6) {
            resultInfo.innerHTML = "Tu patla hai !!";
        } else if (bmiValue >= 18.6 && bmiValue <= 24.9) {
            resultInfo.innerHTML = "Normal Weight";
        } else {
            resultInfo.innerHTML = "Tu mota hai !!";
        }
    }
});
