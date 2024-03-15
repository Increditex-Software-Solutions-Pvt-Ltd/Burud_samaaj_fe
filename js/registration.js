  // JavaScript for handling form navigation and validation
  function nextStep(step) {
    var currentStep = document.getElementById('step' + step);
    var inputs = currentStep.querySelectorAll('input[required], select[required]');
    var isValid = true;

    for (var i = 0; i < inputs.length; i++) {
        if (!inputs[i].value) {
            isValid = false;
            inputs[i].classList.add('error');
        } else {
            inputs[i].classList.remove('error');
        }
    }

    if (isValid) {
        document.getElementById('step' + step).classList.remove('active');
        document.getElementById('step' + (step + 1)).classList.add('active');
    } else {
        alert('Please fill in all required fields.');
    }
}

function prevStep(step) {
    document.getElementById('step' + step).classList.remove('active');
    document.getElementById('step' + (step - 1)).classList.add('active');
}