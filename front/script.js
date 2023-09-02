let health = 100; // Valeur initiale de la barre de vie (100%)
let pp = 100;
let healthIA = 100;


function reduceHealthIA() {
    if (healthIA > 0) {
        healthIA -= 10; // Réduction de la vie de 10%
        if (healthIA < 0) {
            healthIA = 0;
        }
        updateHealthBarIA(); 
    }
}

function updateHealthBarIA() {
    const healthFillIA = document.getElementById('health-fill-ia');
    healthFillIA.style.width = healthIA + '%';
}

updateHealthBarIA()


function reduceHealth() {
    if (health > 0) {
        health -= 10; // Réduction de la vie de 10%
        if (health < 0) {
            health = 0;
        }
        updateHealthBar(); 
    }
}

function updateHealthBar() {
    const healthFill = document.getElementById('health-fill');
    healthFill.style.width = health + '%';
}

function reducePp() {
    if (pp > 0) {
        pp -= 10; // Réduction de la vie de 10%
        if (pp < 0) {
            pp = 0;
        }
        updatePpBar(); 
    }
}

updatePpBar();

function updatePpBar() {
    const ppFill = document.getElementById('pp-fill');
    ppFill.style.width = pp + '%';
}

updateHealthBar(); // Met à jour la barre de vie initiale


