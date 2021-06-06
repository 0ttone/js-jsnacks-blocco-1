
//Generatore di “nomi cognomi” casuali: 
//prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.


var listaCognomi = ["Bianchi", "Rossi","Neri", "Boni", "Messi"];
var listaNomi = ["Loris", "Paola","Andrea", "Piero", "Miriam"];

var listaInvitati = [];


//versione col for
// for(var i = 0; i < 3; i++){
//       var randomNomi = listaNomi[Math.floor(Math.random() * listaNomi.length)];
//       var randomCognomi = listaCognomi[ Math.floor(Math.random() * listaCognomi.length)];
//       var invitato = randomNomi + " " + randomCognomi;

//       //quando non è incluso lo pusha -ATTENZIONE COL for si chiude SEMPRE AL 3
//       //sotto versione while
//       if(!listaInvitati.includes(invitato)){
//             listaInvitati.push(invitato);

//       }
      

//       document.getElementById('lista').innerHTML+= "<li>" + invitato + "</li";


// }

// console.log(listaInvitati);
//chiude versione for

//versione while- il ciclo si ripete fino a che è rispettata la condizione 
//di lunghezza lista invitati
while (listaInvitati.length < 3){
      //si ripete fino ad esaurimento condizione tre in questo caso

      //genera random un nome dalla listaNomi
       var randomNomi = listaNomi[Math.floor(Math.random() * listaNomi.length)];
      //generea un cognome dalla listaCognomi
       var randomCognomi = listaCognomi[ Math.floor(Math.random() * listaCognomi.length)];
       
       //assembliamo nome e cognome random nella variabile invitato
       var invitato = randomNomi + " " + randomCognomi;


       //se la lista non include l invitato (uso di punto esclamativo NON include) 
       if(!listaInvitati.includes(invitato)){
            //stampa nell Html
            document.getElementById('lista').innerHTML+= "<li>" + invitato + "</li";
            
            //se appunto NON lo include lo aggiunge alla array listaInvitati
             listaInvitati.push(invitato);
            
       }
       

}







