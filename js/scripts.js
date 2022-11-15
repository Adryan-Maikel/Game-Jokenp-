var player,winner;
var choosePlayer, chooseCpu;
var cpuPoints,playerPoints;

function play(){
    player = window.document.getElementById('player').value;
    cpuPoints = 0;
    playerPoints = 0;
    if(player === null||player === ""){
        player = "Player";
    }
    // alert(`Olá ${player}`);
    choosePlayer = prompt(`Escolha\n1 - Pedra\n2 - Papel\n3 - Tesoura`);
    if(choosePlayer == 1||choosePlayer == 2||choosePlayer ==3){
        checkWinner(choosePlayer);
        if(winner === "player"){
            alert(`Ganhou!\n${player} escolheu ${nameChoose(Number(choosePlayer))} e a maquina escolheu ${nameChoose(chooseCpu)}.`);    
        }else if(winner === "cpu"){
            alert(`Perdeu!\n${player} escolheu ${nameChoose(Number(choosePlayer))} e a maquina escolheu ${nameChoose(chooseCpu)}.`);
        }else{
            alert("Empate!\nOs dois escolheram "+nameChoose(Number(choosePlayer))+".");
        }

    }else{
        alert(`Escolha invalida, perdeu essa!`);
        cpuPoints++
    }
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