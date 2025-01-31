function toggleForm() {
    let loginBox = document.getElementById("login-box");
    let registerBox = document.getElementById("register-box");

    if (loginBox.style.display === "none") {
        loginBox.style.display = "block";
        registerBox.style.display = "none";
    } else {
        loginBox.style.display = "none";
        registerBox.style.display = "block";
    }
}

function login() {
    let username = document.getElementById("login-username").value;
    let password = document.getElementById("login-password").value;

    let storedUsername = localStorage.getItem("username");
    let storedPassword = localStorage.getItem("password");

    if (username === storedUsername && password === storedPassword) {
        alert("Login successful!");
        window.location.href = "main.html"; // Redirect to your main webpage
    } else {
        alert("Invalid credentials!");
    }
}

function register() {
    let username = document.getElementById("register-username").value;
    let password = document.getElementById("register-password").value;

    if (username && password) {
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        alert("Registration successful! Please log in.");
        toggleForm();
    } else {
        alert("Please fill in all fields.");
    }
}
