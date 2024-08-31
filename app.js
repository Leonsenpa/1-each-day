// app.js
let characterLevel = 1;
let characterXP = 0;
let xpToNextLevel = 100;

let stats = {
    force: 0,
    intelligence: 0,
    // Ajouter d'autres attributs ici
};

let goals = {
    sport: {
        completed: 0,
        total: 20,
        stat: 'force',
        xp: 50 // XP gagné par objectif
    },
    etudes: {
        completed: 0,
        total: 20,
        stat: 'intelligence',
        xp: 50
    }
    // Ajouter d'autres catégories ici
};

function completeGoal(category) {
    if (goals[category].completed < goals[category].total) {
        goals[category].completed++;
        stats[goals[category].stat] += goals[category].xp / xpToNextLevel * 100;
        characterXP += goals[category].xp;

        if (characterXP >= xpToNextLevel) {
            levelUp();
        }

        updateUI();
    }
}

function levelUp() {
    characterXP -= xpToNextLevel;
    characterLevel++;
    xpToNextLevel = Math.floor(xpToNextLevel * 1.5); // Augmentation de la difficulté
    updateCharacterImage();
}

function updateCharacterImage() {
    const characterImage = document.getElementById('character-image');
    if (characterLevel >= 10) {
        characterImage.src = "images/character-level-10.png";
    } else {
        characterImage.src = `images/character-level-${characterLevel}.png`;
    }
}

function updateUI() {
    document.getElementById('character-level').textContent = `Niveau : ${characterLevel}`;
    document.getElementById('sport-goals').textContent = goals.sport.completed;
    document.getElementById('sport-progress').value = stats.force;
    document.getElementById('force-stat').textContent = stats.force.toFixed(1);
    document.getElementById('etudes-goals').textContent = goals.etudes.completed;
    document.getElementById('etudes-progress').value = stats.intelligence;
    document.getElementById('intelligence-stat').textContent = stats.intelligence.toFixed(1);
}

// Initialisation
updateUI();
