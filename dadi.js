const userChoice = prompt ("Scegliere un numero da 1 a 6")
if((userChoice <= 6) && (userChoice != 0)){
    console.log("Il tuo numero è:" + userChoice)
}
else{
    console.log("Il numero inserito non è valido")
}