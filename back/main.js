class Pokemon{

    /*
    Nom : Nom du Pokemon [Un String]
    Type : Type du Pokemon [EAU, FEU, PLANTE]
    Pv : Sante du Pokemon [Un nombre]
    Pp : Energie du Pokemon [Un nombre]
    */
    constructor(nom, type, pv, pp){
        this.nom = nom;
        this.type = type;
        this.pv = pv;
        this.pp = pp;
        this.competences = []; //2 Max
    }

    // Ajoute une compétence au Pokemon
    ajouterCompetence(nom, type, puissance, cout) {
        const nouvelleCompetence = new Competence(nom, type, puissance, cout);
        this.competences.push(nouvelleCompetence);
    }

    /*
    Cible : le Pokemon que l'on attaque [Pokemon]
    indexCompetence : le numero de la competence que l'on souhaite utiliser [Number]
    */
    attaquer(cible, indexCompetence) {
        if (indexCompetence >= 0 && indexCompetence < this.competences.length) {
            const competenceUtilisee = this.competences[indexCompetence];
            console.log(`${this.nom} attaque ${cible.nom} avec ${competenceUtilisee.nom} et inflige ${competenceUtilisee.puissance} de dégâts.`);
            cible.pv -= competenceUtilisee.puissance;
            console.log(`${cible.nom} a ${cible.pv} pv`);
        }else{
            console.log(`${this.nom} ne peut pas attaquer avec une compétence inexistante.`);
        }
    }

    getNom() {
        return this.nom;
    }

    getType() {
        return this.type;
    }

    getPv() {
        return this.pv;
    }

    getPp() {
        return this.pp;
    }

    getCompetences() {
        return this.competences;
    }

}

class Competence {

    /*
    Nom : Nom de la competence [Un String]
    Type : Type de la competence [EAU, FEU, PLANTE, NORMAL]
    Puissance : Puissance en degat de la competence [Un nombre]
    Cout : Le cout en enegie de la competence [Un nombre]
    */
    constructor(nom, type, puissance, cout) {
        this.nom = nom;
        this.type = type;
        this.puissance = puissance;
        this.cout = cout;
    }
}


// Returns an array ['Eau', 'Feu', 'Plante', 'Normal']      : Object.keys(Type) 
// Check if a value equals an enum value                    : val === Type.Up
// Check if a value is in the enum                          : Direction.hasOwnProperty('Eau')
const Type = {
    EAU: 'Eau',
    FEU: 'Feu',
    PLANTE: 'Plante',
    NORMAL: 'Normal'
};

const pokemonJ = new Pokemon("Carapuce", 'EAU', 150, 20);
pokemonJ.ajouterCompetence("Pistolet a O", 'EAU', 50, 5);
console.log(pokemonJ.getNom() + " commence avec " + pokemonJ.getPv() + " pv");

const pokemonIA = new Pokemon("Salameche", 'FEU', 100, 10);
pokemonIA.ajouterCompetence("Braise", 'FEU', 20, 2);
console.log(pokemonIA.getNom() + " commence avec " + pokemonIA.getPv() + " pv");

while (pokemonJ.getPv() > 0 && pokemonIA.getPv() > 0) {

    console.log(typeof(pokemonJ.getNom()));
    console.log(typeof(pokemonJ.getType()));
    console.log(typeof(pokemonJ.getPv()));
    console.log(typeof(pokemonJ.getPp()));

    if (pokemonJ.getPv() > 0) {
        pokemonJ.attaquer(pokemonIA,0);
    }

    if (pokemonIA.getPv() > 0) {
        pokemonIA.attaquer(pokemonJ,0);
    } 
}

if (pokemonJ.getPv() > 0) {
    console.log(pokemonJ.getNom() + " a gagne");
} else {
    console.log(pokemonIA.getNom() + " a gagne");
}


//barre de pp
