let currentStep = 0;
const progressSteps = document.querySelectorAll(".steps .step");
const progressBar = document.getElementById("progress");

function goToLogin() {
    alert('Redirecting to login page...');
}

function validatePassword() {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    const charMin = document.getElementById("char-min");
    const num = document.getElementById("num");
    const uppercase = document.getElementById("uppercase");
    const nextButton = document.getElementById("nextBtn");

    let valid = true;

    if (password.length >= 8) {
        charMin.innerHTML = "✅ 8 characters minimum";
        charMin.classList.add("valid");
        charMin.classList.remove("invalid");
    } else {
        charMin.innerHTML = "❌ 8 characters minimum";
        charMin.classList.add("invalid");
        charMin.classList.remove("valid");
        valid = false;
    }

    if (/\d/.test(password)) {
        num.innerHTML = "✅ Contains a number";
        num.classList.add("valid");
        num.classList.remove("invalid");
    } else {
        num.innerHTML = "❌ Contains a number";
        num.classList.add("invalid");
        num.classList.remove("valid");
        valid = false;
    }

    if (/[A-Z]/.test(password)) {
        uppercase.innerHTML = "✅ Contains an uppercase";
        uppercase.classList.add("valid");
        uppercase.classList.remove("invalid");
    } else {
        uppercase.innerHTML = "❌ Contains an uppercase";
        uppercase.classList.add("invalid");
        uppercase.classList.remove("valid");
        valid = false;
    }

    if (valid && password === confirmPassword && password !== "") {
        nextButton.removeAttribute("disabled");
    } else {
        nextButton.setAttribute("disabled", "true");
    }
}

function togglePassword(fieldId) {
    const field = document.getElementById(fieldId);
    field.type = field.type === "password" ? "text" : "password";
}

function nextStep() {
    if (currentStep < progressSteps.length - 1) {
        currentStep++;
        progressSteps[currentStep].classList.add("active");
        progressBar.style.width = (currentStep / (progressSteps.length - 1)) * 100 + "%";
    }
}