//Crea un array vuoto.
//Chiedi per 6 volte all’utente di inserire un numero,
//se è dispari inseriscilo nell’array.


var elenco = []

for (var x = 1; x<=6; x++){
      var num = parseInt(prompt('inserisci un numero'));
      if (num % 2 !== 0){
            elenco.push(num)
      }
} 
//stampa solo numeri richiesti dalla condizione if else
document.getElementById("elenco").innerHTML= elenco;

console.log(elenco);


//stampa tutti i numeri inseriti - ATTENZIONE cosi solo l ultimo
document.getElementById("insertNum").innerHTML += num;


