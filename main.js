const player1 = {
    name: 'SUB-ZERO',
    hp: 50,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['Вилкой в глаз или в попу раз', 'Ледяной меч'],
    attack: function() {
        console.log(name + ' Fight...');
    }
}

const player2 = {
    name: 'SCORPION',
    hp: 80,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['Гарпун', 'Телепортация'],
    attack: function() {
        console.log(this.name + ' Fight...');
    }
}

function createPlayer(playerName, player) {
    const divPlayerName = document.createElement('div');
    divPlayerName.classList.add(playerName);

    const progressbar = document.createElement('div');
    progressbar.classList.add('progressbar');

    const character = document.createElement('div');
    character.classList.add('character');

    divPlayerName.append(progressbar, character);

    const life = document.createElement('div');
    life.classList.add('life');

    const name = document.createElement('div');
    name.classList.add('name');
    name.innerText = player.name;

    progressbar.append(life, name);

    const img = document.createElement('img');
    img.classList.add('name');
    img.src = player.img;

    character.append(img);

    document.querySelector('.arenas').appendChild(divPlayerName);
}

createPlayer('player1', player1);
createPlayer('player2', player2);