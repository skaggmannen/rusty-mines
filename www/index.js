import { Board } from "rusty-mines";

const WIDTH = 10;
const HEIGHT = 10;

const GRID_COLOR = "#CCCCCC";
const REVEALED_COLOR = "#888888";
const HIDDEN_COLOR = "#EEEEEE";

const CELL_SIZE = 20;

const COUNT_COLORS = [
    "#000000",
    "#0000FF",
    "#00FF00",
    "#00FFFF",
    "#FF0000",
    "#FF00FF",
    "#FFFF00",
    "#FFFFFF",
];


let board = Board.new(WIDTH, HEIGHT);

const canvas = document.getElementById("game-board");
canvas.height = (CELL_SIZE + 1) * HEIGHT + 1;
canvas.width = (CELL_SIZE + 1) * WIDTH + 1;


const done = document.getElementById("done");

canvas.addEventListener("click", event => {
    if (board.done()) {
        return;
    }

    const boundingRect = canvas.getBoundingClientRect();

    const scaleX = canvas.width / boundingRect.width;
    const scaleY = canvas.height / boundingRect.height;

    const canvasLeft = (event.clientX - boundingRect.left) * scaleX;
    const canvasTop = (event.clientY - boundingRect.top) * scaleY;

    const row = Math.min(Math.floor(canvasTop / (CELL_SIZE + 1)), HEIGHT - 1);
    const col = Math.min(Math.floor(canvasLeft / (CELL_SIZE + 1)), WIDTH - 1);

    board.reveal(row, col);

    render();
});

canvas.addEventListener("contextmenu", event => {
    event.preventDefault();
    if (board.done()) {
        return false;
    }

    const boundingRect = canvas.getBoundingClientRect();

    const scaleX = canvas.width / boundingRect.width;
    const scaleY = canvas.height / boundingRect.height;

    const canvasLeft = (event.clientX - boundingRect.left) * scaleX;
    const canvasTop = (event.clientY - boundingRect.top) * scaleY;

    const row = Math.min(Math.floor(canvasTop / (CELL_SIZE + 1)), HEIGHT - 1);
    const col = Math.min(Math.floor(canvasLeft / (CELL_SIZE + 1)), WIDTH - 1);

    board.flag(row, col);

    render();

    return false;
}, false);

const render = () => {
    const ctx = canvas.getContext("2d");

    if (board.done()) {
        done.innerText = "Done!";
    }

    drawGrid(ctx);
    drawCells(ctx);
};

const drawGrid = (ctx) => {
    ctx.beginPath();
    ctx.strokeStyle = GRID_COLOR;

    // Draw vertical lines
    for (let i = 0; i <= WIDTH ; i++) {
        ctx.moveTo(( CELL_SIZE + 1) * i  + 1, 0);
        ctx.lineTo(( CELL_SIZE + 1) * i + 1, ( CELL_SIZE + 1 ) * HEIGHT + 1 );
    }

    // Draw horizontal lines
    for (let i = 0; i <= HEIGHT; i++) {
        ctx.moveTo(0, ( CELL_SIZE + 1) * i + 1);
        ctx.lineTo(( CELL_SIZE + 1) * WIDTH + 1, ( CELL_SIZE + 1 ) * i + 1 );
    }

    ctx.stroke();
};

const drawCells = (ctx) => {
    ctx.beginPath();

    for (let row = 0; row < HEIGHT; row++) {
        for (let col = 0; col < WIDTH; col++) {
            const x = col * (CELL_SIZE + 1);
            const y = row * (CELL_SIZE + 1);
            const cell = board.get_cell(row, col);

            if (cell.revealed) {
                ctx.fillStyle = REVEALED_COLOR;
                ctx.fillRect(
                    x + 1,
                    y + 1,
                    CELL_SIZE,
                    CELL_SIZE
                );

                ctx.fillStyle = "#000000";

                if (cell.mine) {
                    ctx.font = "12px Courier New";
                    ctx.fillText("💣", x+4, y+15);
                } else {
                    const count = cell.neighbors;
                    ctx.fillStyle = COUNT_COLORS[count - 1];
                    ctx.font = "20px Courier New";
                    if (count > 0) {
                        ctx.fillText("" + count, x+4, y+17);
                    }
                }
            } else {
                ctx.fillStyle = HIDDEN_COLOR;
                ctx.fillRect(
                    x + 1,
                    y + 1,
                    CELL_SIZE,
                    CELL_SIZE
                );

                if (cell.flagged) {
                    ctx.font = "12px Courier New";
                    ctx.fillStyle = "#000000";
                    ctx.fillText("🚩", x+4, y+15);
                }
            }
        }
    }

    ctx.stroke();
};

render();