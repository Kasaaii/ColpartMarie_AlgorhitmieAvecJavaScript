"use strict";

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
} //fonction trouvée sur internet


let Tueur = { //Nous avons besoin d’un tueur nommé Jason et qui possède 100 points de vie.
    nom : "Jason",
    hp : 100,
}

class Caracteristique { //Nous avons besoin de Caractéristiques de personnages avec des noms bien clichés (nerd, sportif, blonde…), une probabilité de mourir, une de mettre des dégâts et une de mourir en mettant des dégâts (ex: 0.3, 0.5, 0.2).
    constructor(type, p_mort, p_degats, p_degatsMaisMort){
        this.type = type;
        this.p_mort = p_mort;
        this.p_degats = p_degats;
        this.p_degatQuandMort = p_degatsMaisMort;
    }
}

class Survivant {
    constructor(prenom, caracteristque){
        this.prenom = prenom;
        this.caracteristque = caracteristque;
        this.estEnVie = true;
    }
}

let Nerd = new Caracteristique("Nerd", 0.3, 0.2, 0.5);
let Jock = new Caracteristique("Jock", 0.2, 0.6, 0.2);
let Cheerleader = new Caracteristique("Cheerleader", 0.2, 0.4, 0.4);
let Emo = new Caracteristique("Emo", 0.2, 0.1, 0.7);
let Normie = new Caracteristique("Normie", 0.5, 0.5, 0);

let prenoms = ["Fred", "Daphnée", "Vera", "Sammy", "Scooby", "Tony", "Bruce", "Natasha", "Wanda", "Sam", "Clover", "Alex", "Jerry"];
let caracteristques = [Nerd, Jock, Cheerleader, Emo, Normie];
let survivants = [];

function auMoinsUnSurvivant(liste){
    for (let i in liste){
        if (liste[i].estEnVie){
            return true;
        }
        return false;
    }
}

function cavaleDeJason(){
    for (let i=0; i<5; i++){ //Nous avons besoin de 5 Survivants avec un nom généré aléatoirement d’un tableau de prénoms et d’une caractéristique prise de celles disponibles (toujours aléatoire).
        let survivant = new Survivant(prenoms[getRandomInt(0, prenoms.length)],caracteristques[getRandomInt(0,caracteristques.length)]);
        survivants.push(survivant);
    }
    console.log("Le tueur en série Jason, en cavale, s'est caché dans la forêt.\nUne équipe de choc part à sa recherche :");
    for (let i in survivants){
        console.log(`${survivants[i].prenom}, ${survivants[i].caracteristque.type}`);
    }
    console.log("");
    console.log("La traque commence.");
    while(Tueur.hp > 0 && auMoinsUnSurvivant(survivants)){ //Tant que le tueur n’est pas mort ou que les survivants n’ont pas tué Jason.
        for(let i in survivants){ //Le tueur attaque un des survivants.
            if (survivants[i].estEnVie){
                console.log(`Jason attaque ${survivants[i].prenom}`);
                let p = Math.random();
                if (p < survivants[i].caracteristque.p_mort){ //- soit le survivant meurt.
                    console.log(`${survivants[i].prenom} meurt.`); 
                    survivants[i].estEnVie = false;
                }else{
                    if (p < survivants[i].caracteristque.p_mort + survivants[i].caracteristque.p_degats){ //- soit le survivant esquive et inflige 10 points de dégâts.
                        console.log(`${survivants[i].prenom} esquive. Iel contre-attaque et inflige 10 dégâts à Jason.`);
                        Tueur.hp -= 10;
                        if (Tueur.hp <= 0) {
                            break;
                        }
                    }else{ //- soit le survivant inflige 15 points de dégâts mais meurt.
                        console.log(`${survivants[i].prenom} meurt. Iel arrive cependant à infliger 15 dégâts à Jason.`);
                        survivants[i].estEnVie = false;
                        Tueur.hp -= 15;
                        if (Tueur.hp <= 0) {
                            break;
                        }
                    }
                }
            }
        }
    }
    if (Tueur.hp <= 0) {
        console.log("");
        console.log("Jason est mort.\nLes survivants ont gagnés.");
        let postume = []; //Les morts seront affichés à la fin.
        for (let i in survivants){
            if (survivants[i].estEnVie == false){
                postume.push[survivants[i].prenom];
            }
        }
        if (postume.length > 0){
            console.log(`Malheureusement, nous déplorons aussi la mort de :`);
            for (i in postume){
                console.log(`${postume[i].prenom}, ${postume[i].caracteristque.type}`);
            }
        }else{
            console.log("Tous les survivants sont en vie. Bravo.");
        }
    }else{
        console.log("");
        console.log("Tous les survivants sont morts, Jason continue sa cavale.");
    }
}

console.log("\nExercice 2:\n ");
cavaleDeJason()