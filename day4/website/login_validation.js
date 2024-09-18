function login(event) {
    if (event) event.preventDefault();

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    if (username == "" || password == "") {
        alert("Please enter the user name and password.")
        return false;
    }
    window.location.href="welcome.html";
    return true;
}