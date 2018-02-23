const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const gamestate = {
    X: [],
    O: [],
    currentPlayer: "X"
}

app.get("/", function (req, res) {
    res.send(gamestate);
});

app.post("/placePlayer/:cellNum", (req, res) => {
    gamestate[gamestate.currentPlayer].push(req.params.cellNum);
    if (gamestate.currentPlayer === "X") {
        gamestate.currentPlayer = "O";
    } else {
        gamestate.currentPlayer = "X";
    }
    res.send(gamestate);
})

app.listen(3000, function () {
    console.log("now listening for server ready");
});