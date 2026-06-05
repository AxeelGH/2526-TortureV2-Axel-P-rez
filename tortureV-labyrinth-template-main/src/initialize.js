import globals from "./globals.js";
import {FPS} from "./constants.js";
import {Level, roomData} from "./Level.js";



//Función que inicializa los elementos HTML
function initHTMLelements()
{
    // Canvas, context Screen
    globals.canvas = document.getElementById('gameScreen');
    globals.ctx    = globals.canvas.getContext('2d');

}



function initLevel()
{
    const level = Level.create(50, roomData);
    globals.level = level;
}


function initVars()
{
    //Inicializamos las variables de gestión de tiempo
    globals.previousCycleMilliseconds = 0;
    globals.deltaTime = 0;
    globals.frameTimeObj = 1 / FPS; //Frame time in seconds.

}





export {
    initHTMLelements,
    initVars,
    initLevel,

}