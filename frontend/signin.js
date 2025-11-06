document.getElementById("login-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const response = await fetch("http://localhost:8080/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
    });

    const result = await response.text();

    if (result === "success") {
        localStorage.setItem("loggedInUser", email);
        window.location.href = "home.html";
    } else {
        document.getElementById("error-message").textContent = result;
    }
});
