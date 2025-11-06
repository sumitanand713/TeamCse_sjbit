document.getElementById("registerForm").addEventListener("submit", async function(event) {
    event.preventDefault();

    const user = {
        name: document.getElementById("fullname").value,
        username: document.getElementById("username").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    };

    const response = await fetch("http://localhost:8080/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user)
    });

    if (response.ok) {
        alert("✅ Registration Successful");
        window.location.href = "signin.html";
    } else {
        alert("❌ Registration Failed!");
    }
});
