//Chiedi un numero di 4 cifre all’utente
//e calcola la somma di tutte le cifre che compongono il numero.
//(bonus: controllate che il numero sia realmente di 4 cifre altrimenti restituite un alert)


var askNumber = prompt('inserisci un numero di 4 cifre');
var sumNumber ;

arrayNumber.push(askNumber)
arrayNumber=[]

console.log

for (var x = 0; x <4; x++){
      if askNumber
}
      

      console.log(x);




      // CORREZIONE IN LIVE CODING DA RIGUARDARE COPIATO DIRETTAMENTE
      //VA RIFATTA QUI SOPRA - 04/06/2021


      /*
Chiedi un numero di 4 cifre all’utente
e calcola la somma di tutte le cifre che compongono il numero.
(bonus: controllate che il numero sia realmente di 4 cifre altrimenti 
restituite un alert)
*/

var userNumber = prompt('Inserisci un numero di 4 cifre');

var inputLen = userNumber.length;

if (inputLen !== 4) {

    alert('Ehi! Devi inserire un numero di 4 cifre');

} else if (isNaN(userNumber)) {
    
    alert("L'input deve essere obbligatoriamente un numero.");

} else {

    var result = 0;

    for (var i = 0; i < inputLen; i++) {
        result += parseInt(userNumber[i])
    }

    console.log(result);
}
       
      









