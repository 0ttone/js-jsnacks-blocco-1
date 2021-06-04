//Stampa il cubo dei primi N numeri,
//dove N è un numero indicato dall’utente attraverso un prompt.

var cube = parseInt(prompt ("Inserire quantità numeri"));

for (var i = 1 ; i <= cube ; i++){
      document.getElementById("output").innerHTML += Math.pow(i, 3) + "</br>"
}

console.log(i);




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
