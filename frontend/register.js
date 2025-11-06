document.getElementById('registerForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const fullname = document.getElementById('fullname').value.trim();
  const username = document.getElementById('username').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const confirmPassword = document.getElementById('confirmPassword').value.trim();

  if (password !== confirmPassword) {
    alert('Passwords do not match.');
    return;
  }

  const users = JSON.parse(localStorage.getItem('users')) || [];

  if (users.some(u => u.username === username)) {
    alert('Username already exists!');
    return;
  }

  users.push({ fullname, username, phone, email, password });
  localStorage.setItem('users', JSON.stringify(users));

  alert('Registration successful! Please login.');
  window.location.href = 'login.html';
});

document.getElementById("registerForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form reload

  // Get password values
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  // Check if passwords match
  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  // If all is good → Redirect to home page
  window.location.href = "signin.html";
});
