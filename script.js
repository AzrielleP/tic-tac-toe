

const Gameboard = (() =>{
    let gameboard = ["x", "o", "x", "o"];

    return{
        createGrid: ()=>{
        let gameContainer = document.querySelector(".gameContainer");
            for (let i = 0; i < 9; i++){
                let grid = document.createElement("div");
                grid.className = i;
                gameContainer.appendChild(grid);
            }
        }
    }
})();

Gameboard.createGrid();