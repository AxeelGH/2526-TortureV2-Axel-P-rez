
import globals from "./globals.js";
import {initHTMLelements, initVars, initLevel} from "./initialize.js";
import update from "./gameLogic.js";
import render from "./gameRender.js";



/////////////////////////////////////////////////////////
// GAME INIT
/////////////////////////////////////////////////////////

window.onload = init;

function init()
{

    //Inicializamos los elementos HTML: Canvas, Context, Caja de texto de pruebas
    initHTMLelements();

    //Inicializamos el mapa del juego
    initLevel();


    //Inicialización de variables del juego
    initVars();



    // Start the first frame request
    window.requestAnimationFrame(gameLoop);

}


/////////////////////////////////////////////////////////
// GAME EXECUTE
/////////////////////////////////////////////////////////


//Bucle principal de ejecución
function gameLoop(timeStamp)
{
    // Keep requesting new frames
    window.requestAnimationFrame(gameLoop, globals.canvas);
 
    //Tiempo real de ciclo de ejecución
    const elapsedCycleSeconds = (timeStamp - globals.previousCycleMilliseconds) / 1000; // seconds
    
    //Tiempo anterior de ciclo de ejecución
    globals.previousCycleMilliseconds = timeStamp;

    //Variable que corrige el tiempo de frame debido a retrasos con respecto al tiempo objetivo (frameTimeObj)
    globals.deltaTime += elapsedCycleSeconds;
    
    
    //CHANGES: CORRECCIONES
    globals.cycleRealTime += elapsedCycleSeconds;
    
    
    //CHANGES: CORRECCIONES
    if (globals.cycleRealTime >= globals.frameTimeObj)
    {               
        //Update the game logic. gameLogic.js
        update();

        //Perform the drawing operation. gameRender.js
        render();

        //CHANGES: 
        //Corregimos los excesos de tiempo
        globals.cycleRealTime -= globals.frameTimeObj;
        globals.deltaTime = 0;
       
    }
}