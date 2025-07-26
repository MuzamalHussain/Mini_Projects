// Show/hide height input fields based on selected unit
function toggleHeightInputs() {


    const unit = document.querySelector('input[name="unit"]:checked').value;

 

    document.getElementById('height-cm').style.display = unit === 'cm' ? 'block' : 'none';
    document.getElementById('height-ft').style.display = unit === 'ft' ? 'flex' : 'none';
    document.getElementById('height-m').style.display = unit === 'm' ? 'block' : 'none';
}

function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const unit = document.querySelector('input[name="unit"]:checked').value;

    let heightInMeters;

    if (unit === 'cm') {
        const height = parseFloat(document.getElementById('height').value);
        if (!height || !weight) return alert('Please enter valid height and weight');
        heightInMeters = height / 100;

    } else if (unit === 'm') {
        const heightM = parseFloat(document.getElementById('height-meters').value);
        if (!heightM || !weight) return alert('Please enter valid height and weight');
        heightInMeters = heightM;

    } else if (unit === 'ft') {
        const feet = parseFloat(document.getElementById('feet').value);
        const inches = parseFloat(document.getElementById('inches').value) || 0;
        if (!feet || !weight) return alert('Please enter valid height and weight');
        const totalInches = (feet * 12) + inches;
        heightInMeters = totalInches * 0.0254;
    }

    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);

    let status = "";
    if (bmi < 18.5) status = "Underweight";
    else if (bmi < 24.9) status = "Normal weight";
    else if (bmi < 29.9) status = "Overweight";
    else status = "Obese";

    document.getElementById('bmiValue').innerText = `Your BMI: ${bmi}`;
    document.getElementById('bmiStatus').innerText = `Status: ${status}`;

    const statusElement = document.getElementById('bmiStatus');
    statusElement.style.color =
        status === "Normal weight" ? "green" :
            status === "Overweight" ? "orange" :
                status === "Obese" ? "red" : "blue";

    document.getElementById('resultModal').style.display = "flex";
}

function closeModal() {
    document.getElementById('resultModal').style.display = "none";
    document.getElementById('weight').value = ''
    document.getElementById('height-meters').value = ''
    document.getElementById('height').value = ''
    const unit = document.querySelector('input[name="unit"]:checked').value;
    if (unit === 'ft') {
        document.getElementById('inches').value = ''
        document.getElementById('feet').value = ''
    }
}
