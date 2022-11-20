var player,winner;
var choosePlayer, chooseCpu;
var cpuPoints,playerPoints;

var input, label, button, instruction, titleGame, game, scoreboard, buttonCancel;
var move;

input = window.document.getElementById("player");
label = window.document.getElementById("label");
button = window.document.getElementById("play");
instruction = window.document.getElementById("instruction");
titleGame = window.document.getElementById("titleGame");
game = window.document.getElementById("game");
scoreboard = window.document.getElementById("scoreboard");
buttonCancel = window.document.getElementById("cancel");
move = window.document.getElementById("move");

function play(){

    player = input.value;
    input.style.display = "none";
    label.style.display = "none";
    button.style.display = "none";
    instruction.style.display = "none";

    cpuPoints = 0;
    playerPoints = 0;
    scoreboard.innerHTML = `&emsp;Placar <br> Player: ${playerPoints}  vs Cpu: ${cpuPoints} <br>`;

    buttonCancel.style.display = "block";
    game.style.display = "block";

    if(player === null||player === ""){
        player = "Player";
    }
    // alert(`Olá ${player}`);
    // choosePlayer = prompt(`Escolha\n1 - Pedra\n2 - Papel\n3 - Tesoura`);
    titleGame.innerHTML = `${player}, escolha.`;
}

function insert(number){
    move.style.display = "block";
    choosePlayer = number;
    if(choosePlayer == 1||choosePlayer == 2||choosePlayer ==3){
        checkWinner(choosePlayer);
        if(winner === "player"){
            // alert(`Ganhou!\n${player} escolheu ${nameChoose(choosePlayer)} e a maquina escolheu ${nameChoose(chooseCpu)}.`);    

            playerPoints++;

            titleGame.innerHTML = `${player.toUpperCase()}, GANHOU!`;
            scoreboard.innerHTML = `&emsp;Placar <br> Player: ${playerPoints}  vs Cpu: ${cpuPoints} <br>`;
           
            move.innerHTML = `Player escolheu ${nameChoose(choosePlayer)} <br> VS <br> Cpu escolheu ${nameChoose(chooseCpu)}`;

        }else if(winner === "cpu"){
            // alert(`Perdeu!\n${player} escolheu ${nameChoose(choosePlayer)} e a maquina escolheu ${nameChoose(chooseCpu)}.`);

            cpuPoints++;

            titleGame.innerHTML = `CPU, GANHOU!`;
            scoreboard.innerHTML = `&emsp;Placar <br> Player: ${playerPoints}  vs Cpu: ${cpuPoints} <br>`;

            move.innerHTML = `Player escolheu ${nameChoose(choosePlayer)} <br> VS <br> Cpu escolheu ${nameChoose(chooseCpu)}`;

        }else{
            // alert("Empate!\nOs dois escolheram "+nameChoose(choosePlayer)+".");
            titleGame.innerHTML = `EMPATOU!`;
            move.innerHTML = `Os dois escolheram ${nameChoose(choosePlayer)}`;
        }

    }else{
        // alert(`Escolha invalida, perdeu essa!`);
        // cpuPoints++;
    }
}

function cancel() {
    //recarrega a pagina cancelando o jogo
    document.location.reload(true);
}

function nameChoose(choose){
    if(choose === 1){
        return "pedra";
    }else if(choose === 2){
        return "papel";
    }else if(choose === 3){
        return "tesoura";
    }else{
        return "invalido";
    }
}

function checkWinner(choosePlayer){
    chooseCpu = Math.floor((Math.random()*3)+1);
    if(choosePlayer != chooseCpu){
        if(chooseCpu == 1/*pedra*/ && choosePlayer == 3 /*tesoura*/
        || chooseCpu == 2/*papel*/ && choosePlayer == 1/*pedra*/
        || chooseCpu == 3/*tesoura*/ && choosePlayer ==2/*papel*/){
            winner = "cpu";
        }else{
            winner = "player";
        }
    }else{
        winner = "none";
    } 
}