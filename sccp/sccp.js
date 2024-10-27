const players = [
    { name: "Yuri Alberto", age: 23, position: "Atacante",Value: "R$68M",Games: "47", image: "img/jogador1.png" },
    { name: "Rodrigo Garro", age: 26, position: "Meio-campo",Value: "R$54M",Games: "50",image: "img/jogador2.png" },
    { name: "Hugo Souza", age: 25, position: "Goleiro",Value: "R$24M",Games: "22",image: "img/jogador3.png" },
];

let currentIndex = 0;

function updatePlayer() {
    const playerName = document.getElementById("playerName");
    const playerAge = document.getElementById("playerAge");
    const playerPosition = document.getElementById("playerPosition");
    const playerImage = document.getElementById("playerImage");
    
    playerName.textContent = players[currentIndex].name;
    playerAge.textContent = `Idade: ${players[currentIndex].age}`;
    playerPosition.textContent = `Posição: ${players[currentIndex].position}`;
    playerValue.textContent = `Valor: ${players[currentIndex].Value}`;
    playerGames.textContent = `Jogos: ${players[currentIndex].Games}`;
    playerImage.src = players[currentIndex].image;
}

document.getElementById("prevButton").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + players.length) % players.length;
    updatePlayer();
});

document.getElementById("nextButton").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % players.length;
    updatePlayer();
});

// Inicializa o primeiro jogador
updatePlayer();
