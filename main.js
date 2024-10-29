const players = [
    {
        name: "Yuri Alberto",
        goals: 20,
        assists: 6,
        games: 48,
        image: "img/jogador1.png" // Coloque o caminho correto da imagem
    },
    {
        name: "Ángel Romero",
        goals: 14,
        assists: 4,
        games: 48,
        image: "img/jogador2.png" // Coloque o caminho correto da imagem
    },
    {
        name: "Héctor Hernández",
        goals: 0,
        assists: 0,
        games: 5,
        image: "img/jogador3.png" // Coloque o caminho correto da imagem
    },
    {
        name: "Pedro Raul",
        goals: 3,
        assists: 1,
        games: 30,
        image: "img/jogador4.png" // Coloque o caminho correto da imagem
    },
    {
        name: "Memphis Depay",
        goals: 0,
        assists: 2,
        games: 4,
        image: "img/jogador5.png" // Coloque o caminho correto da imagem
    },
    {
        name: "Talles Magno",
        goals: 3,
        assists: 2,
        games: 9,
        image: "img/jogador6.png" // Coloque o caminho correto da imagem
    },
    {
        name: "Pedro Henrique",
        goals: 2,
        assists: 1,
        games: 24,
        image: "img/jogador7.png" // Coloque o caminho correto da imagem
    },
    {
        name: "Giovane",
        goals: 2,
        assists: 0,
        games: 20,
        image: "img/jogador8.png" // Coloque o caminho correto da imagem
    },
    {
        name: "Rodrigo Garro",
        goals: 8,
        assists: 7,
        games: 50,
        image: "img/jogador9.png" // Coloque o caminho correto da imagem
    },
    {
        name: "André Carrillo",
        goals: 0,
        assists: 1,
        games: 5,
        image: "img/jogador10.png" // Coloque o caminho correto da imagem
    },
    {
        name: "Matheus Araújo",
        goals: 0,
        assists: 0,
        games: 12,
        image: "img/jogador11.png" // Coloque o caminho correto da imagem
    },
    {
        name: "Igor Coronado",
        goals: 4,
        assists: 5,
        games: 35,
        image: "img/jogador12.png" // Coloque o caminho correto da imagem
    },
    {
        name: "Ruan Oliveira",
        goals: 0,
        assists: 0,
        games: 0,
        image: "img/jogador13.png" // Coloque o caminho correto da imagem
    },
    {
        name: "Ryan",
        goals: 1,
        assists: 1,
        games: 30,
        image: "img/jogador14.png" // Coloque o caminho correto da imagem
    },
    {
        name: "Maycon",
        goals: 2,
        assists: 2,
        games: 13,
        image: "img/jogador15.png" // Coloque o caminho correto da imagem
    },
    {
        name: "Breno Bidon",
        goals: 2,
        assists: 4,
        games: 41,
        image: "img/jogador16.png" // Coloque o caminho correto da imagem
    },
    {
        name: "José Martínez",
        goals: 0,
        assists: 0,
        games: 8,
        image: "img/jogador17.png" // Coloque o caminho correto da imagem
    },
    {
        name: "Alex Santana",
        goals: 0,
        assists: 0,
        games: 15,
        image: "img/jogador18.png" // Coloque o caminho correto da imagem
    },
    {
        name: "Charles",
        goals: 0,
        assists: 0,
        games: 15,
        image: "img/jogador19.png" // Coloque o caminho correto da imagem
    },
    {
        name: "Raniele",
        goals: 0,
        assists: 0,
        games: 47,
        image: "img/jogador20.png" // Coloque o caminho correto da imagem
    },
    {
        name: "Matheus Bidu",
        goals: 1,
        assists: 1,
        games: 20,
        image: "img/jogador21.png" // Coloque o caminho correto da imagem
    },
    {
        name: "Hugo",
        goals: 0,
        assists: 6,
        games: 49,
        image: "img/jogador22.png" // Coloque o caminho correto da imagem
    },
    {
        name: "Diego Palacios",
        goals: 0,
        assists: 0,
        games: 1,
        image: "img/jogador23.png" // Coloque o caminho correto da imagem
    },
    {
        name: "Matheuzinho",
        goals: 1,
        assists: 0,
        games: 40,
        image: "img/jogador24.png" // Coloque o caminho correto da imagem
    },
    {
        name: "Fagner",
        goals: 0,
        assists: 5,
        games: 39,
        image: "img/jogador25.png" // Coloque o caminho correto da imagem
    },
    {
        name: " André Ramalho",
        goals: 1,
        assists: 0,
        games: 19,
        image: "img/jogador26.png" // Coloque o caminho correto da imagem
    },
    {
        name: "Cacá",
        goals: 5,
        assists: 1,
        games: 35,
        image: "img/jogador27.png" // Coloque o caminho correto da imagem
    },
    {
        name: "Gustavo Henrique",
        goals: 1,
        assists: 0,
        games: 28,
        image: "img/jogador28.png" // Coloque o caminho correto da imagem
    },
    {
        name: "Felix Torres",
        goals: 0,
        assists: 0,
        games: 47,
        image: "img/jogador29.png" // Coloque o caminho correto da imagem
    },
    {
        name: "Caetano",
        goals: 0,
        assists: 0,
        games: 15,
        image: "img/jogador30.png" // Coloque o caminho correto da imagem
    },
    {
        name: "Felipe Longo",
        goals: 0,
        assists: 0,
        games: 0,
        image: "img/jogador31.png" // Coloque o caminho correto da imagem
    },
    {
        name: "M. Donelli",
        goals: 0,
        assists: 0,
        games: 7,
        image: "img/jogador32.png" // Coloque o caminho correto da imagem
    },
    {
        name: "Hugo Souza",
        goals: 0,
        assists: 0,
        games: 22,
        image: "img/jogador33.png" // Coloque o caminho correto da imagem
    }
];

let currentIndex = 0;

function updatePlayer() {
    const player = players[currentIndex];
    const playerName = document.getElementById("player-name");
    const playerGoals = document.getElementById("player-goals");
    const playerAssists = document.getElementById("player-assists");
    const playerGames = document.getElementById("player-games");
    const playerImage = document.getElementById("player-image");

    // Animação de transição
    const playerInfo = document.querySelector('.player-info');
    playerInfo.style.opacity = 0;

    setTimeout(() => {
        playerName.textContent = player.name;
        playerGoals.textContent = player.goals;
        playerAssists.textContent = player.assists;
        playerGames.textContent = player.games;
        playerImage.src = player.image;

        playerInfo.style.opacity = 1;
    }, 500);
}

function nextPlayer() {
    currentIndex = (currentIndex + 1) % players.length; // Próximo jogador
    updatePlayer();
}

function prevPlayer() {
    currentIndex = (currentIndex - 1 + players.length) % players.length; // Jogador anterior
    updatePlayer();
}

// Inicializa o primeiro jogador
updatePlayer();
