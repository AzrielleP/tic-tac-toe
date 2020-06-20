

const Gameboard = (() =>{
    let gameboard = ["", "", "", "", "", "", "", "", ""];
    let gameContainer = document.querySelector(".gameContainer");
    let div = gameContainer.getElementsByTagName("div");
        

    function renderArray(){
        for (let i =0; i <9; i++){
            div[i].textContent = gameboard[i];
        }
    }

    const player = (name, move) => {
        return {name, move}
    }
    
    const player1 = player("Player 1", "X");
    const player2 = player("Player 2", "O");
    let turn = true;

    function checkWinner(winner){
        let isWinner = (value) => value !== "" && value == winner.move;
        let pattern1 = [0,3,6],
            pattern2 = [1,4,7],
            pattern3 = [2,5,8],
            pattern4 = [0,4,8],
            pattern5 = [2,4,6];
        if(gameboard.slice(0,3).every(isWinner)){
            console.log(`${winner.name} won`);
        }
        else if(gameboard.slice(3,6).every(isWinner)){
            console.log(`${winner.name} won`);
        }
        else if(gameboard.slice(6,).every(isWinner)){
            console.log(`${winner.name} won`);
        }
        else if(pattern1.map((index) => gameboard[index]).every(isWinner)){
            console.log(`${winner.name} won`);
        }
        else if(pattern2.map((index) => gameboard[index]).every(isWinner)){
            console.log(`${winner.name} won`);
        }
        else if(pattern3.map((index) => gameboard[index]).every(isWinner)){
            console.log(`${winner.name} won`);
        }
        else if(pattern4.map((index) => gameboard[index]).every(isWinner)){
            console.log(`${winner.name} won`);
        }
        else if(pattern5.map((index) => gameboard[index]).every(isWinner)){
            console.log(`${winner.name} won`);
        }
        
    }

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
                    console.log(gameboard);
                    checkWinner(player);
                    
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