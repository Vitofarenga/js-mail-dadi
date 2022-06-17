const authorized = ['vito@libero.it', 'simone@libero.it', 'diego@libero.it', 'fede@libero.it']

let userInsert = prompt("inserisci la tua mail");

let userMail = false

for ( let index = 0; index < authorized.length ; index++){
    const element = authorized[index]
    if(userInsert == element){
        userMail = true;
    }
}
console.log(userMail);