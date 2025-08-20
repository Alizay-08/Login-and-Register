document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  let email = this.email.value.trim();
  let password = this.password.value.trim();

  if (!/^\S+@\S+\.\S+$/.test(email)) {
    alert("Invalid email format.");
    return;
  }
  if (password.length < 6) {
    alert("Password should be at least 6 characters.");
    return;
  }
  alert("Login successful!");
  this.reset();
});
