function showAlert() {
    alert("Welcome to our website!");
}

function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (user === "admin" && pass === "1234") {
        alert("Login Successful");
        window.location.href = "index.html";
    } else {
        alert("Invalid Credentials");
    }
}

function apply() {
    alert("Application Submitted!");
}

function submitForm() {
    alert("Message Sent! We will reply shortly.");
}

function submitApplication(event) {
    event.preventDefault();
    alert("Application submitted successfully! We will review your profile and reach out soon.");
    const form = document.querySelector('.interactive-form');
    if (form) form.reset();
}

const elements = document.querySelectorAll(".fade");

function revealFade() {
    elements.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
            el.classList.add("show");
        }
    });
}

window.addEventListener("load", revealFade);
window.addEventListener("scroll", revealFade);