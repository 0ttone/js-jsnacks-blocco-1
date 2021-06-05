//Il software deve chiedere per 5 volte all’utente di inserire un numero.
//Il programma stampa la somma di tutti i numeri inseriti.
//Esegui questo programma in due versioni, con il for e con il while.

var result= 0;

for (var i = 1 ; i <= 5 ; i++){
      var askNumber = parseInt(prompt ('inserisci un numero'));
      result += askNumber;
}

document.getElementById("result").innerHTML="FOR la somma è " + result;
console.log(i);

var output= 0;
var x = 0;

while (x < 5){
      var userNumber = parseInt(prompt ('inserisci un numero'));
      x++;

      //molta attenzione -questa riga è DENTRO AL CICLO, lo chiude e riparte il 
      //la verifica esterna fino a x inferiore a 5- se messa fuori stampa 
      //l ultimo numero inserito nel prompt
      output += userNumber;
    
}

document.getElementById("output").innerHTML="WHILE la somma è " + output;




















//VARIANTE CORRETTA PER COMPLETEZZA DI VAR


// var number = parseInt(prompt ("Inserire quantità numeri"));
// var cubic;
// for (var x = 0; x <=number; x++){
      //cubic = Math.pow(x, 3)
      //       document.getElementById("result").innerHTML += "<br" + cubic; 
      
// }

//ALTRA VARIANTE STRINGATA IN console.log NO HTML

// var cubo = parseInt(prompt ("Inserire quantità numeri"));
// 
// for (i = 1; i < cubo; i++){
     // console.log(Math.pow(i, 3));
//}







//cubo di 4
//Math.pow(4, 3);
