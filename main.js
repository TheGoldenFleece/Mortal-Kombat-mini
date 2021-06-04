const player1 = {
    player: 1,
    name: 'SUB-ZERO',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['Вилкой в глаз или в попу раз', 'Ледяной меч'],
    attack: function() {
        console.log(name + ' Fight...');
    }
}

const player2 = {
    player: 2,
    name: 'SCORPION',
    hp: 100,
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

const random = document.querySelector('.button');

random.addEventListener('click', function(){

    if(changeHP(player2)) {
        alert(`${player1.name} WON!!!`);
        return;
    };

    if(changeHP(player1)) {
        alert(`${player2.name} WON!!!`);
    };
})

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

function changeHP(player){
    const attack = getRandomIntInclusive(1, 20);
    player.hp -= attack; 
    const life = document.querySelector(`.player${player.player} .life`);
    life.style.width = player.hp + '%';

    console.log(player.hp);

    if(player.hp < 0) {
        random.disabled = true;
        return true;
    }
}


createPlayer('player1', player1);
createPlayer('player2', player2);