

const Gameboard = (() =>{
    let gameboard = ["", "", "", "", "", "", "", "", ""];
    let gameContainer = document.querySelector(".gameContainer");
    let div = gameContainer.getElementsByTagName("div");
        

    function renderArray(){
        for (let i =0; i <9; i++){
            div[i].textContent = gameboard[i];
        }
        console.log(div);
    }

    function checkWinner(){
    
    }

    function clickGrid(player){
        gameContainer.addEventListener("click", event =>{
            if(event.target !== event.currentTarget){
                gameboard[Number(event.target.className)] = player.move;
                renderArray();
         }
         event.stopPropagation();
        })
    }
    return {clickGrid};

    
})();

const player = (name, move) => {
    return {name, move}
}

const player1 = player("Player 1", "X");
const player2 = player("Player 2", "O");


Gameboard.clickGrid(player1);