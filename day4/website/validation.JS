function register_validate(event) {

    if (event) event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let pass = document.getElementById('password').value;
    let cpass = document.getElementById('cpassword').value;

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };
    if (name == "" || email == "" || pass == "" || cpass == ""){ 
        window.alert("all fields are mandatory.")
        return false    
    }
    if (!validateEmail(email)){
        alert("Please enter correct email.");
        return false
    } 
    if (pass != cpass){
        alert("password and confirm password should be same.");
        return false
    }
    window.location.href= "registeration_complete.html";   
    return true;
}
