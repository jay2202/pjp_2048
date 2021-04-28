import grid from './modules/grid.js';

    grid.init();

document.getElementsByClassName("new-game")[0].addEventListener("click", function () {
    grid.reset();
});

document.addEventListener("keyup", function(e) {
    let direction = null;

    if(e.key == "ArrowUp") {
        direction = "UP";
    } else if(e.key == "ArrowRight") {
        direction = "RIGHT";
    } else if(e.key == "ArrowDown") {
        direction = "DOWN";
    } else if(e.key == "ArrowLeft") {
        direction = "LEFT";
    }

    if(direction !== null) {
        grid.slide(direction);
    }
    return false;
});