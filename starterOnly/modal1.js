// function qui permet gérer le bouton de navigation en responsive
function editNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// DOM Elements
// modalbg cible mon background & ajoute la class show pour le voir et et le retire à la fermeture
const modalbg = document.querySelector(".bground");
// modalBtn cible mes deux boutons "je m'inscris"
const modalBtn = document.querySelectorAll(".modal-btn");
// closeBtn cible mon bouton de fermeture, la croix
const closeBtn = document.getElementById("close");


// CONST Regex
//Ne peut pas contenir de chiffres mais espace et caractères spéciaux + au minimum de deux caractères
const regexText = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{1,}$/;
const regexMail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const regexBirthdate = /^(19|20)\d{2}[-](0?[1-9]|1[012])[-](0[1-9]|[12]\d|3[01])$/;

//FORM Elements

//Pour écouter sur un élement dom de ma page il faut le cibler (inputTexte via document.getElementBy)et ensuite appliquer un addEventlistener puis
//choisir l'évenement (click, submit, onkeyup) 1er argument et mettre en deuxième argument une function.

// inputTexte.addEventListener("evenement",maFunction(event));


// function maFunction() {  ma function est équivalente à ça : () => {}
//     alert('coucou');
// }

// Function pour valider le champ texte (séléctionne le champ prénom et nom)
// pour création de nouvelle fonction changer le paramètre (inputMail)
function validerChampTexte(inputTexte) {
    //  console.log(inputTexte);
    // (inputTexte.value.length <= 1 || false == inputTexte.value.match)
    if (!inputTexte.value.match(regexText)) {
        inputTexte.closest('.formField').classList.add("hasError");
        // Autre technique, renvoie le plus proche ancêtre qui n'est pas un input, ma div formfield.
        // console.log(inputTexte.closest(":not(input)"))
        // permet d'arrêter et de sorti de ma function
        return;
    }
    inputTexte.closest('.formField').classList.remove("hasError");
    // console.log(inputTexte.value);
}

// Function pour valider le champ mail
function validerChampMail(inputMail) {
    //  console.log(inputMail);
    if (!inputMail.value.match(regexMail)) {
        inputMail.closest('.formField').classList.add("hasError");
        return;
    }
    inputMail.closest('.formField').classList.remove("hasError");
}

// Function pour valider le champ Anniversaire
function validerChampBirthdate(inputBirthdate) {
    // Récupère la date au format année-mois-jour
    //  console.log(inputBirthdate.value);
    if (!inputBirthdate.value.match(regexBirthdate)) {
        inputBirthdate.closest('.formField').classList.add("hasError");
        return;
    }
    inputBirthdate.closest('.formField').classList.remove("hasError");
}

// Function pour valider le champ Quantity
function validerChampQuantity(inputQuantity) {
    // console.log(inputQuantity.value);
    if (inputQuantity.value < 1 || inputQuantity.value >= 100) {
        inputQuantity.closest('.formField').classList.add("hasError");
        return;
    }
    inputQuantity.closest('.formField').classList.remove("hasError");
}

//   console.log(document.querySelectorAll("input[data-validator=location]:checked").length);
// Function pour valider le champ Location
function validerChampLocation(inputLocation) {
    // inputLocation affiche tous les inputs de toutes les villes <input data-va....>
    // console.log(inputLocation);
    //inputLocation.checked affiche tous les checked si false ou true
    // console.log(inputLocation.checked);
    //inputLocation affiche toutes les valeurs des villes New York San Franciso ....
    //console.log(inputLocation.value);
    const locationChecked = document.querySelectorAll("input[data-validator=location]:checked").length;
    // console.log(locationChecked);
    // taille de ma nodeList
    if (locationChecked === 0) {
        inputLocation.closest('.formField').classList.add("hasError");
        return;
    }
    inputLocation.closest('.formField').classList.remove("hasError");
}

// Function pour valider le champ Checkbox
function validerChampCheckbox(inputCheckbox) {
    // console.log(inputQuantity.value);
    // false est pas coché, ==== strictement égal à false=0 true=1
    if (inputCheckbox.checked === false) {
        // console.log(inputCheckbox.checked);
        inputCheckbox.closest('.formField').classList.add("hasError");
        return;
    }
    inputCheckbox.closest('.formField').classList.remove("hasError");
}
