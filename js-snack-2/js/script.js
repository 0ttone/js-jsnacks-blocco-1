//L’utente inserisce due parole in successione, con due prompt.
//Il software stampa prima la parola più corta, poi la parola più lunga.


var parolaUno = prompt("scrivi una parola");
var parolaDue = prompt("scrivi una parola");

if (parolaUno.length > parolaDue.length){
      document.getElementById("result").innerHTML = parolaDue + parolaUno;
} else if (parolaUno.length < parolaDue.length){
      document.getElementById("result").innerHTML = parolaUno + parolaDue;
}