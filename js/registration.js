const register = document.getElementById("regSubmit")

register.addEventListener('click', function(event) {
    event.preventDefault();

    const username = document.getElementById("regUsername").value;
    const email = document.getElementById("regEmail").value;
    const password = document.getElementById("regPassword").value;
    const confirmPassword = document.getElementById("confirmPass").value;

    let isValid = true

    var passRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*#?&.])[A-Za-z\d@$!%*#?&.]{8,16}$/;
    var emailRegex = /^[a-zA-Z0-9.-_]+@[a-z]+\.[a-z]{2,6}$/;

    if (username=="" && email=="" && password=="" && confirmPassword=="") {
        document.getElementById("result").innerHTML="Fill out the fields"
        isValid=false
    } else if (username=="") {
        document.getElementById("result").innerHTML="Enter username";
        isValid = false
    } else if (username.length < 6) {
        document.getElementById("result").innerHTML="Username must be at least 6 character";
        isValid = false
    } else if (email=="") {
        document.getElementById("result").innerHTML="Enter email";
        isValid = false
    } else if (!emailRegex.test(email)) {
        document.getElementById("result").innerHTML="Enter a valid email address";
        isValid = false;
    }  else if (password=="") {
        document.getElementById("result").innerHTML="Enter password";
        isValid = false
    } else if (password.length < 8) {
        document.getElementById("result").innerHTML="Password must be at least 8 characters";
        isValid = false
    } else if (!passRegex.test(password)) {
        document.getElementById("result").innerHTML="Enter a valid password address";
        isValid = false
    } else if (confirmPassword=="") {
        document.getElementById("result").innerHTML="Confirm password";
        isValid = false
    } else if (password!==confirmPassword) {
        document.getElementById("result").innerHTML="Password doesn't match";
        isValid = false
    } else if (localStorage.getItem(username)) {
        document.getElementById("result").innerHTML="Username is already taken"
        isValid=false
    }
    
    let user = {
        'login': username,
        'email': email,
        'password': password    
    }
    if (isValid) {
        localStorage.setItem(user.login, JSON.stringify(user))
        window.location.href = "./login.html";
    }
})




let eyeicon = document.getElementById("eyeicon")
let passw = document.getElementById("regPassword")
eyeicon.onclick = function() {
    if (passw.type == "password") {
        passw.type = "text"
        eyeicon.name = "eye-outline"
    } else {
        passw.type = "password"
        eyeicon.name = "eye-off-outline"
    }
}

let eyeicon2 = document.getElementById("eyeicon2")
let confpass = document.getElementById("confirmPass")
eyeicon2.onclick = function() {
    if (confpass.type == "password") {
        confpass.type = "text"
        eyeicon2.name = "eye-outline"
    } else {
        confpass.type = "password"
        eyeicon2.name = "eye-off-outline"
    }
}