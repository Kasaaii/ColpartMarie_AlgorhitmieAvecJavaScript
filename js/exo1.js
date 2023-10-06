"use strict";

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
} //fonction trouvée sur internet


let Personnage = { //Nous avons besoin d’un Personnage avec un prénom et une santé mentale à 10.
    nom : "John",
    santeMentale : 10
}

let Trajet = { //Nous avons besoin d’un Trajet avec une radio, 30 feux rouges et un nombre de changements.
    radio : "",
    feuxRestants : 30,
    changements : 0,
}

//Nous avons besoin d’une liste de 5 musiquesdont Anissa - Wejdene.
let liste = ["Annisa - Wejdene", "Stage of SEKAI - Leo/need", "Metamo Re:born - MORE MORE JUMP", "Cinema - Vivid BAD SQUAD", "Mr Showtime - Wonderlands x Showtime", "Samsa - Nightcord at 25pm"]

function retourEnTaxi(){
    console.log(`${Personnage.nom} monte dans un premier taxi.`); 
    while (Trajet.feuxRestants > 0) {
        Trajet.radio = liste[getRandomInt(0, 5)]; //Partons du principe qu’une musique se change à chaque feu rouge qu’il rencontre et qu’il est à 30 feux rouges de chez lui.
        console.log(`Il reste ${Trajet.feuxRestants} feux rouges avant la fin du trajet.\nLa musique jouée est "${Trajet.radio}."`); //À chaque feu rouge, afficher la musique jouée + le nombre de feux restants.
        if (Trajet.radio == "Annisa - Wejdene"){ //Dès qu’il entend cette musique, il perd 1 de santé mentale et change de taxi.
            Personnage.santeMentale --; 
            if (Personnage.santeMentale == 0){
                console.log("EXPLOSION"); //Sa santé mentale tombe à 0, il explose et donc affiche « explosion ».
                break;
            }
            Trajet.changements ++;
            console.log(`${Personnage.nom} monte dans un nouveau taxi.`);
        }else{
            Trajet.feuxRestants --;
        }
    }
    if (Personnage.santeMentale > 0) { //Si il a passé les 30 feux rouges, il est arrivé à destination et donc affiche qu’il est bien arrivé et qu’il lui a fallu x changements de taxi pour y arriver.
        console.log(`${Personnage.nom} est arrivé chez lui. Il aura changé de taxi ${Trajet.changements} fois.`); 
    }
}


console.log("\nExercice 1:\n ");
retourEnTaxi();