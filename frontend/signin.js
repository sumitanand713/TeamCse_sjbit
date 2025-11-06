document.getElementById("login-form").addEventListener("submit", async function(event){
    event.preventDefault();

    console.log("Login form submitted ✅");

    const loginData = {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    };

    const response = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(loginData)
    });

    const result = await response.text();
    console.log("Response from backend:", result);

    if(result === "SUCCESS"){
        window.location.href = "dashboard.html";
  // ✅ redirect in same folder
    } else {
        document.getElementById("error-message").innerText = "Invalid email or password!";
    }
});
