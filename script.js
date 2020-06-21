const Gameboard = (() =>{
    let gameboard = ["", "", "", "", "", "", "", "", ""];
    let gameContainer = document.querySelector(".gameContainer");
    let div = gameContainer.getElementsByTagName("div");
    let playerDisplay = document.querySelector(".playerDisplay");
    let resultContainer = document.querySelector(".resultContainer");
    let playAgainButton = document.querySelector(".playAgain");

  
    function renderArray(){
        for (let i =0; i <9; i++){
            div[i].firstChild.textContent = gameboard[i];
            if (gameboard[i] == "X"){
                div[i].style.backgroundColor = "#ED9797";
                div[i].style.boxShadow = "inset 0px 4px 4px rgba(0, 0, 0, 0.25)";
            }
            else if(gameboard[i] == "O"){
                div[i].style.backgroundColor = "#65C5DA";
                div[i].style.boxShadow = "inset 0px 4px 4px rgba(0, 0, 0, 0.25)";
            }
        }
    }

    const player = (name, move, winner) => {
        return {name, move, winner}
    }
    
    const player1 = player("Player 1", "X", false);
    const player2 = player("Player 2", "O", false);
    let turn = true;

    function startGame(){
        let player = null;
        playerDisplay.textContent = `${player1.name}'s turn`;
        gameContainer.addEventListener("click", event =>{
            if(event.target !== event.currentTarget){
                //This line checks whose turn is it. A turn value of true means player 1 gets to play.
                turn ? player = player1 : player = player2;
                // Check if the array doesn't have a value yet
                if(gameboard[Number(event.target.className)] == "" ){
                    gameboard[Number(event.target.className)] = player.move;
                    renderArray();
                    checkWinner(player);
                    if (!player.winner){
                    //Switch players by negating the value of turn
                    turn = !turn;
                    turn ? player = player1 : player = player2;
                    playerDisplay.textContent = `${player.name}'s turn`;
                    player == player1 ? playerDisplay.style.backgroundColor = "#ED9797": playerDisplay.style.backgroundColor = "#65C5DA";
                    }
                }
         }
         event.stopPropagation();
        })
    }
    return {startGame};

    function checkWinner(winner){
        let isWinner = (value) => value !== "" && value == winner.move;
        let pattern1 = [0,3,6],
            pattern2 = [1,4,7],
            pattern3 = [2,5,8],
            pattern4 = [0,4,8],
            pattern5 = [2,4,6];
        if(gameboard.slice(0,3).every(isWinner)){
            displayWinner(winner);
        }
        else if(gameboard.slice(3,6).every(isWinner)){
            displayWinner(winner);
        }
        else if(gameboard.slice(6,).every(isWinner)){
            displayWinner(winner);
        }
        else if(pattern1.map((index) => gameboard[index]).every(isWinner)){
            displayWinner(winner);
        }
        else if(pattern2.map((index) => gameboard[index]).every(isWinner)){
            displayWinner(winner);
        }
        else if(pattern3.map((index) => gameboard[index]).every(isWinner)){
            displayWinner(winner);
        }
        else if(pattern4.map((index) => gameboard[index]).every(isWinner)){
            displayWinner(winner);
        }
        else if(pattern5.map((index) => gameboard[index]).every(isWinner)){
            displayWinner(winner);
        }
        else if(!gameboard.includes("")){
            displayDraw();
        }
    }

    function playAnotherGame(){
        playAgainButton.addEventListener("click", () =>{
            gameboard = ["", "", "", "", "", "", "", "", ""];
            for (let i =0; i <9; i++){
                div[i].style.backgroundColor = "#C4C4C4";
                div[i].style.boxShadow = "none";
            }
            renderArray();
            resultContainer.style.visibility = "hidden";
        })
    }

    function displayWinner(playerName){
        resultContainer.style.visibility = "visible";
        playerDisplay.textContent = `${playerName.name} won!`;
        playerDisplay.style.backgroundColor = "#4FA370";
        playerName.winner = true;
        playAnotherGame()

    }

    function displayDraw(){
        resultContainer.style.visibility = "visible";
        playerDisplay.textContent = "Draw";
        playerDisplay.style.backgroundColor = "#8D8D8D";
        playAnotherGame()
    }
})();

Gameboard.startGame();