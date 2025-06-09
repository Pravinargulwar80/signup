function validateForm() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Check with localStorage (demo only)
  const storedEmail = localStorage.getItem("email");
  const storedPassword = localStorage.getItem("password");

  if (email === storedEmail && password === storedPassword) {
    alert("Login successful!");
    window.location.href = "dashboard.html";
  } else {
    alert("Incorrect email or password!");
  }

  return false;
}
