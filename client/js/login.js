document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting by default

    var usernameInput = document.getElementById("email");
    var passwordInput = document.getElementById("password");

    if (usernameInput.value && passwordInput.value) {
      // Both username and password are filled, allow navigation to main.html
      window.location.href = "main.html";
    } else {
      // Display an error message or perform any other desired action
      alert("Please fill in both the username and password fields.");
    }
  });