import { FREE_SPACE_X, FREE_SPACE_Y, ROOM_SIZE_X} from "./constants.js";

export class Level 
{
    static Images = [" ", "\u2B1C"];
    constructor(data)
    {
        this.data     = data;     //Array bidimensional de datos del mapa
    }


    static create(numBricks, roomData) {

        const data = roomData;

        const roomComplete = Level.createRoomBricks(numBricks, roomData);
        return new Level(roomComplete);

    }


    static createRoomBricks(numBricks, roomData) {
 
        //Rules.
        //1) Escoger aleatoriamente una posición A de la mazmorra dentro del array freeRooms. 
        //2) Mirar si para todas las posiciones colindantes (N, S, E, W) que estén libres, si estas tienen, asímismo, un mínimo 2 posiciones colindantes libres, 
        // sin contar la posición de referencia (A)
        //3) Si se cumple lo anterior, ponemos un bloque en dicha posición, y lo contabilizamos.
        //4) En caso contrario, no ponemos un bloque en dicha posición.
        //5) Pongamos un bloque o no, borramos dicha posición del array freeRooms, para que no podamos volver a escogerla.
        //6) Repetir todo hasta que coloquen todos los bloques.

        //Continuar AQUÍ

        const levelArray = Level.createLevelArray();
        
        for(let i= 0; i < levelArray.length;i++){
            const randomPos = Level.chooseRandomArrayPos(levelArray);
            console.log(randomPos);
        }
        



        return roomData;
        
    }




    //Devuelve, para una posición de habitación incluida en el array freeRooms de la zona libre del mapa, la fila y columna correspondiente en el mapa completo
    static getRoomFilColFrom(position) {

        const numCol = FREE_SPACE_X;
        
        let fil = Math.floor(position / numCol);
        let col = position % numCol;

        //Sumamos 1 para incluir el borde
        col++;
        fil++;
        
        
        return {fil, col};
        
    }

    static createLevelArray(){

        const levelArray = new Array;
        levelArray.length = FREE_SPACE_X * FREE_SPACE_Y;

        for (let i = 0;i < levelArray.length;i++) {
            levelArray[i] = 0;
        }

        return levelArray;
    }

    static chooseRandomArrayPos(levelArray){

        const randomPos = Math.floor(Math.random()* levelArray.length);

        return randomPos;
    }
}


// Datos del nivel 1
export const roomData =
[
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
];