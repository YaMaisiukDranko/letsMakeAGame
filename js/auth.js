firebase.auth().onAuthStateChanged(function(user) {
    if (user) { //signed in
        document.getElementById("login-div").style.display = "block";
        document.getElementById("user-div").style.display = "none";
    } else { //signed out
        document.getElementById("login-div").style.display = "none";
        document.getElementById("user-div").style.display = "block";
    }
});

function login(){
    var userEmail = document.getElementById("email-field").value;
    var userPassword = document.getElementById("password-field").value;

    firebase.auth().signInWithEmailAndPassword(userEmail, userPassword).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            window.alert("ERROR " + errorMessage);
        });
}