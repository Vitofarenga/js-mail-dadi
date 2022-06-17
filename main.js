const authorized = ['vito@libero.it', 'simone@libero.it', 'diego@libero.it', 'fede@libero.it']
let userMail = prompt("inserisci la tua mail");

for ( let index = 0; index < authorized.length; index++){
    const element = authorized[index]
    if(userMail == element){
        alert('Accesso autorizzato')
    }
    else if(userMail != element){
        alert('Accesso negato')
    }
}