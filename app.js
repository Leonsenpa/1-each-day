let level = 1;
let xp = 0;
const xpPerGoal = 20;
const xpForNextLevel = 100;

document.getElementById('add-goal').addEventListener('click', addGoal);

function addGoal() {
    const goalText = document.getElementById('new-goal').value;
    if (goalText === '') return;

    const goalItem = document.createElement('li');
    goalItem.textContent = goalText;
    const completeButton = document.createElement('button');
    completeButton.textContent = 'Accomplir';
    completeButton.addEventListener('click', completeGoal);

    goalItem.appendChild(completeButton);
    document.getElementById('goal-list').appendChild(goalItem);

    document.getElementById('new-goal').value = '';
}

function completeGoal(event) {
    const goalItem = event.target.parentElement;
    goalItem.remove();
    gainXP(xpPerGoal);
}

function gainXP(amount) {
    xp += amount;
    if (xp >= xpForNextLevel) {
        xp -= xpForNextLevel;
        levelUp();
    }
    updateCharacter();
}

function levelUp() {
    level++;
}

function updateCharacter() {
    document.getElementById('level').textContent = level;
    document.getElementById('xp').textContent = xp;
}
