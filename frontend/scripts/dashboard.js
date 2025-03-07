document.addEventListener("DOMContentLoaded", () => {
    // Check if user is logged in
    const userName = localStorage.getItem("username");

    if (!userName) {
        window.location.href = "login.html";  // Redirect to login if not authenticated
    } else {
        document.getElementById("userName").textContent = userName;  // Display username
    }

    // Logout functionality
    document.getElementById("logoutBtn").addEventListener("click", () => {
        localStorage.removeItem("username");  // Remove user session
        window.location.href = "login.html";  // Redirect to login
    });
});
