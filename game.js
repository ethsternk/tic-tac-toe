function init() {
    fetch("http://localhost:3000")
        .then(res => res.json())
        .then(drawBoard);
}

const prompt = document.getElementById("prompt");
const cells = document.querySelectorAll("td");

for (let i = 0; i < cells.length; i++) {
    const cell = cells[i];
    cell.addEventListener('click', handleClick);
}

function handleClick(event) {
    fetch("http://localhost:3000/placePlayer/" + event.target.id, {
        method:"POST"
    })
        .then(res => res.json())
        .then(drawBoard);
}

function drawBoard(gamestate) {
    
    if (gamestate.currentPlayer === "O") {
        prompt.innerHTML = "<span style='color:blue'>O</span>'s turn";
    } else {
        prompt.innerHTML = "<span style='color:red'>X</span>'s turn";
    }
    
    for (let i = 0; i < gamestate.X.length; i++) {
        const cellNum = gamestate.X[i];
        const cell = document.getElementById(cellNum);
        cell.className = "X";
        cell.textContent = "X";
        console.log(cell);
    }
    for (let i = 0; i < gamestate.O.length; i++) {
        const cellNum = gamestate.O[i];
        const cell = document.getElementById(cellNum);
        cell.className = "O";
        cell.textContent = "O";
        console.log(cell);
    }
}

init();