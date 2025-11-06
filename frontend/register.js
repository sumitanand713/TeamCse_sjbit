document.getElementById("registerForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const user = {
        fullName: document.getElementById("fullname").value,
        username: document.getElementById("username").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    };

    const confirmPassword = document.getElementById("confirmPassword").value;
    if (user.password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    const response = await fetch("http://localhost:8080/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user)
    });

    const result = await response.text();
    alert(result);

    if (result === "Account created successfully") {
        window.location.href = "signin.html";
    }
});
