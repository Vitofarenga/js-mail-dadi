const userChoice = parseInt(prompt ("Scegliere un numero da 1 a 6"));
if((userChoice <= 6) && (userChoice != 0)){
    console.log("Il tuo numero è: " + userChoice);
}
else{
    alert("Il numero inserito non è valido");
}

const iaChoice = Math.floor( (Math.random() * 6) + 1);
console.log("Il numero dell'IA è: " + iaChoice );