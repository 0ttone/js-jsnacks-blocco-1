//il software deve chiedere per 10 volte all’utente di inserire un numero.
//Il programma stampa la somma di tutti i numeri inseriti.


//uso del for per calcolare iterazione

var result = 0



for (var i = 1 ; i <= 10 ; i++){
      var askNumber = parseInt(prompt ('inserisci un numero'));
      result += askNumber
}

document.getElementById('result').innerHTML= "la somma è" + result;

//itera per dieci volte (il "for" è esclusivamente contatore del numero di volte
// 10 in questo caoso) il contenuto delle graffe che è una richiesta "prompt"
//di inserire un numero - parseInt ci evita casini con le stringhe, la somma 
//ricorsiva è += ovvero somma "+" a me stesso "="