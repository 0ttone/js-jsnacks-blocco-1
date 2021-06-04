//L’utente inserisce due numeri in successione, con due prompt.
//Il software stampa il maggiore

var firstNumber = parseInt(prompt ('inserisci un numero'));
var secondNumber = parseInt(prompt ('inserisci un numero'));

if (firstNumber > secondNumber){
      document.getElementById("result").innerHTML = firstNumber + "maggior primo numero";
} else {
      document.getElementById("result").innerHTML = secondNumber + "maggiore secondo numero";
} 



