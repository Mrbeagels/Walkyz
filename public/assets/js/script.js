// Fonction menu déroulant
menuB.addEventListener('click', displayList);

function displayList() {
    menuList.classList.toggle('active')
}

// fonction confirmation du mot de passe 

// signInButton.addEventListener('click', validate)

// function validate() {
//     var a = document.getElementById("password").value;
//     var b = document.getElementById("Passwordconfirm").value;
//     if (a!=b) alert("Les mots de passe ne correspondent pas.");
//     else {
//     alert("Les mots de passe correspondent.");
//     document.f.submit();
//     }
// }

// Fonction alerte mail envoyé reinitialisation MDP

forgotPassword.addEventListener('click', alertForgotPassword);

function alertForgotPassword(){
    var userMail = document.getElementById("mailForgotPassword").value;
    alert(`Un mail de réinitialisation du mot de passe vient de vous être envoyé à ${userMail}, pensez a vérifier vos spams & indésirables`);
}