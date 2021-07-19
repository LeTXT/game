let diryG, dirxG

function keydown() {
    let key = event.keyCode
    if(key == 38) { //up
        diryG = -1
    } else if(key == 40) { //down
        diryG = 1
    } else if(key == 37) { //esquerda
        dirxG = -1
    } else if(key == 39) { //direita
        dirxG = 1
    } else if(key == 32) { //space bar //fire

    }
}
function keyup() {
    let key = event.keyCode
    if((key == 38) || (key == 40)) { //up
        diryG = 0
    } else if((key == 37) || (key == 39)) { //esquerda
        dirxG = 0
    }
}