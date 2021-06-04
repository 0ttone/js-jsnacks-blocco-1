//In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
//chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.


var invitUser = prompt ("Inserire nome");

document.getElementById("invitUser").innerHTML = invitUser;

// array email da confrontare MALEDETTI APICI!!!!!!!!

var invitList = [ "pippo", "sonny", "ada", "lisa", "nuts", "miriam","luca"];

// mostra tutti gli invitati
document.getElementById("invitList").innerHTML = invitList;

// confronto ed esclusione
// versione precedente non gira con else - applico soluzione check lezione

var check = false;

for (var i = 0; i < invitList.length; i++){
      if(invitList[i] === invitUser){
            check = true;
      } 
}
  //la variabile check è una flag variable che sfruttiamo per arrivare ad usare
  // la condizione if else           

if (check === true){
      document.getElementById("checkMail").innerHTML = "Sei nella lista";
}else {
      document.getElementById("checkMail").innerHTML = "Non sei nella lista";
}

