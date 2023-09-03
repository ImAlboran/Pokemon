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
            const efficacite = this.efficace(cible, indexCompetence);
            //EFICACITE
            //
            console.log(`${this.nom} attaque ${cible.nom} avec ${competenceUtilisee.nom}`);
            this.messageEfficacite(efficacite);
            console.log(`${this.nom} inflige ${competenceUtilisee.puissance*efficacite} de dégâts.`);
            cible.pv -= competenceUtilisee.puissance*efficacite;
            console.log(`${cible.nom} a ${cible.pv} pv`);
        }else{
            console.log(`${this.nom} ne peut pas attaquer avec une compétence inexistante.`);
        }
    }

    efficace(cible, indexCompetence){
        const competenceUtilisee = this.competences[indexCompetence];
        if(competenceUtilisee.type === 'EAU' ){
            if (cible.type === 'EAU') {
                return 1;
            }
            if (cible.type === 'FEU') {
                return 2;
            }
            if (cible.type === 'PLANTE') {
                return 0.5;
            }
        }
        if(competenceUtilisee.type === 'FEU' ){
            if (cible.type === 'EAU') {
                return 0.5;
            }
            if (cible.type === 'FEU') {
                return 1;
            }
            if (cible.type === 'PLANTE') {
                return 2;
            }
        }
        if(competenceUtilisee.type === 'PLANTE' ){
            if (cible.type === 'EAU') {
                return 2;
            }
            if (cible.type === 'FEU') {
                return 0.5;
            }
            if (cible.type === 'PLANTE') {
                return 1;
            }
        }
        if(competenceUtilisee.type === 'NORMAL' ){
            return 1;
        }
    }

    messageEfficacite(quotient_efficacite){
        switch (quotient_efficacite) {
            case 0.5:
                console.log("C'est peu efficace");
                break;
            case 1:
                console.log("Touche");
                break;
            case 2:
                console.log("C'est tres efficace");
                break;
            default:
                break;
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

const pokemonJ = new Pokemon("Carapuce", 'EAU', 200, 20);
pokemonJ.ajouterCompetence("Pistolet à O", 'EAU', 40, 5);
pokemonJ.ajouterCompetence("Charge", 'NORMAL', 35, 2);
console.log(pokemonJ.getNom() + " commence avec " + pokemonJ.getPv() + " pv");

const pokemonIA = new Pokemon("Salameche", 'FEU', 200, 20);
pokemonIA.ajouterCompetence("Flammèche", 'FEU', 40, 5);
pokemonIA.ajouterCompetence("Griffe", 'NORMAL', 40, 2);
console.log(pokemonIA.getNom() + " commence avec " + pokemonIA.getPv() + " pv");

while (pokemonJ.getPv() > 0 && pokemonIA.getPv() > 0) {


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
