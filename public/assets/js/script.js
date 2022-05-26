// Fonction menu déroulant
menuB.addEventListener('click', displayList);

function displayList() {
    menuList.classList.toggle('active')
}

// fonction confirmation du mot de passe 

signInButton.addEventListener('click', validate)

function validate() {
    var a = document.getElementById("password").value;
    var b = document.getElementById("Passwordconfirm").value;
    if (a!=b) alert("Les mots de passe ne correspondent pas.");
    else {
    alert("Les mots de passe correspondent.");
    document.f.submit();
    }
}