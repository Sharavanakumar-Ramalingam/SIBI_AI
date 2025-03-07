document.addEventListener("DOMContentLoaded", () => {
    // Handle Signup
    document.getElementById("signupForm")?.addEventListener("submit", function (event) {
        event.preventDefault();

        let formData = new FormData();
        formData.append("username", document.getElementById("username").value);
        formData.append("email", document.getElementById("email").value);
        formData.append("password", document.getElementById("password").value);

        fetch("http://127.0.0.1:8000/signup", {
            method: "POST",
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
            if (data.message === "Signup successful!") {
                window.location.href = "login.html";
            }
        })
        .catch(error => console.error("Error:", error));
    });

    // Handle Login
    document.getElementById("loginForm")?.addEventListener("submit", function (event) {
        event.preventDefault();

        let formData = new FormData();
        formData.append("email", document.getElementById("loginEmail").value);
        formData.append("password", document.getElementById("loginPassword").value);

        fetch("http://127.0.0.1:8000/login", {
            method: "POST",
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.message === "Login successful!") {
                localStorage.setItem("username", data.username);
                window.location.href = "dashboard.html";
            } else {
                alert("Invalid credentials!");
            }
        })
        .catch(error => console.error("Error:", error));
    });

    // Logout Function
    document.getElementById("logoutBtn")?.addEventListener("click", function () {
        localStorage.removeItem("username");
        window.location.href = "login.html";
    });

    // Redirect to login if not authenticated
    if (window.location.pathname.includes("dashboard.html") && !localStorage.getItem("username")) {
        window.location.href = "login.html";
    }
});
