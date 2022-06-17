const authorized = ['vito@libero.it', 'simone@libero.it', 'diego@libero.it', 'fede@libero.it']
let userMail = prompt("inserisci la tua mail");

for ( let index = 0; index < authoorized.length; index++){
    const element = authorized[index]
    if(userMail == authorized){
        alert('Accesso autorizzato')
    }
}