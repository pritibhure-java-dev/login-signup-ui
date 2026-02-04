// Track current form mode
let isLogin = true;

// Toggle between Login and Signup form
function toggleForm() {
    isLogin = !isLogin;

    document.getElementById("title").innerText = isLogin ? "Login" : "Signup";
    document.getElementById("name").style.display = isLogin ? "none" : "block";
    document.getElementById("confirmPassword").style.display = isLogin ? "none" : "block";
    document.getElementById("mobile").style.display = isLogin ? "none" : "block";
    document.getElementById("rememberBox").style.display = isLogin ? "block" : "none";

    document.querySelector(".toggle span").innerText =
        isLogin ? "Create new account" : "Already have an account";

    document.getElementById("msg").innerText = "";
}

// Validate inputs and display messages
function submitForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let mobile = document.getElementById("mobile").value;
    let msg = document.getElementById("msg");

    if (!email.includes("@")) {
        msg.style.color = "red";
        msg.innerText = "Enter a valid email address";
        return;
    }

    if (password.length < 6) {
        msg.style.color = "red";
        msg.innerText = "Password must be at least 6 characters long";
        return;
    }

    if (!isLogin && name.trim() === "") {
        msg.style.color = "red";
        msg.innerText = "Name is required for signup";
        return;
    }

    if (!isLogin && password !== confirmPassword) {
        msg.style.color = "red";
        msg.innerText = "Passwords do not match";
        return;
    }

    if (!isLogin && mobile.length !== 10) {
        msg.style.color = "red";
        msg.innerText = "Enter a valid 10-digit mobile number";
        return;
    }

    msg.style.color = "green";
    msg.innerText = isLogin ? "Login Successful" : "Signup Successful";
}
