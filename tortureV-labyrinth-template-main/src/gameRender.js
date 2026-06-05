
import globals from "./globals.js";
import {TILE_SIZE, X_DRAW_START, Y_DRAW_START} from "./constants.js";
import {Level} from "./Level.js";



// Función que renderiza los gráficos
export default function render()
{
    //Borramos la pantalla entera y HUD
    globals.ctx.fillStyle = 'black';
    globals.ctx.fillRect(0, 0, globals.canvas.width, globals.canvas.height);

    //Dibujamos el mapa (nivel)
    renderMap();


}




function renderMap()
{

    const numRow = globals.level.data.length;
    const numCol = globals.level.data[0].length;
    
    for (let i = 0; i < numRow; ++i)
    {
        for (let j = 0; j < numCol; ++j)
        {
            const idTile = globals.level.data[i][j];
            const x = j*TILE_SIZE;
            const y = i*TILE_SIZE;
            drawTile(x + X_DRAW_START, y + Y_DRAW_START, idTile);
            
        }
    }
}


function drawTile(x, y, id)
{
    const image = Level.Images[id];
    globals.ctx.font = '14px emulogic';
    globals.ctx.fillText(image, x, y);
}



