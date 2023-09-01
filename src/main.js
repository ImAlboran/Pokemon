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
        }else{
            console.log(`${this.nom} ne peut pas attaquer avec une compétence inexistante.`);
        }
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


class Jeu{
    constructor(pokemonJ, pokemonIA){
        this.pokemonJ = pokemonJ;
        this.pokemonIA = pokemonIA;
    }
}
  