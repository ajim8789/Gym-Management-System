document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  const validEmail = "ajimm4416@gmail.com";
  const validPassword = "Ajim123";

  if (email === validEmail && password === validPassword) {
    // Redirect to next page
    window.location.href = "admin.html";
  } else {
    alert("Invalid email or password. Please try again.");
  }
}); 
