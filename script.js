

const Gameboard = (() =>{
    let gameboard = ["x", "o", "x", "o", "", "x", "", "o", "x"];
    let gameContainer = document.querySelector(".gameContainer");
    let div = gameContainer.getElementsByTagName("div");
        
    return{
        renderArray: ()=>{
            for (let i =0; i <9; i++){
                div[i].textContent = gameboard[i];
            }
            console.log(div);
        }
    }
})();

const player = (name, move) => {
    return {name, move}
}

const player1 = player("Player 1", "X");
const player2 = player("Player 2", "O");
console.log(player2.name);
console.log(player1.name);

Gameboard.renderArray();