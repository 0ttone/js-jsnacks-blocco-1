
//Inserisci un numero, se è pari stampa il numero,
//se è dispari stampa il numero successivo


var num = parseInt(prompt('inserisci un numero'));

document.getElementById("insertNum").innerHTML="il numero inserito è "+ num

      
      if (num % 2 === 0){
            document.getElementById("elenco").innerHTML= "soddisfa la richiesta " + num ;
      }
      else{
            //mettere tra parentesi n+1 per assicurarsi che mantenga il typeof number, se no becca stringa
            document.getElementById("elenco").innerHTML= "soddisfa la richiesta " + (num + 1 );  
      }

//stampa solo numeri richiesti dalla condizione if else


console.log(elenco);





