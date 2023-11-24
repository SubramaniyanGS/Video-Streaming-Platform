function checkPassword(){
    let password = document.getElementById("password").value;
    let cnfrmPassword = document.getElementById("cnfrm-password").value;
    let email = document.getElementById("email").value;
    console.log(" Password:", password,'\n',"Confirm Password:",cnfrmPassword);
    let message = document.getElementById("message");
    if (email.length === 0) {
        alert("Please enter your email.");
        return;
      }
    if(password.length != 0){
        if(password == cnfrmPassword){
            message.textContent = "Hey! Passwords match";
            message.style.color = "#1dcd59";
            setTimeout(function() {
            window.location.href = "login.html";
        }, 1000);
      }else{
            message.textContent = "OOPS! Password don't match. Please try again.";
            message.style.color = "#ff4d4d";
        }
    }
    else{
        alert("Password can't be empty!");
        message.textContent = "Please Enter Password";
    }
}
