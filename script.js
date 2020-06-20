

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

    const player = (name, move) => {
        return {name, move}
    }
    
    const player1 = player("Player 1", "X");
    const player2 = player("Player 2", "O");
    let turn = true;

    function startGame(){
        let player = null;
        gameContainer.addEventListener("click", event =>{
            if(event.target !== event.currentTarget){
                //This line checks whose turn is it. A turn value of true means player 1 gets to play.
                turn ? player = player1 : player = player2;

                // Check if the array doesn't have a value yet
                if(gameboard[Number(event.target.className)] == "" ){
                    gameboard[Number(event.target.className)] = player.move;
                    renderArray();

                    //Switch players by negating the value of turn
                    turn = !turn;
                }
         }
         event.stopPropagation();
        })
    }


    return {startGame};

    
})();




Gameboard.startGame();