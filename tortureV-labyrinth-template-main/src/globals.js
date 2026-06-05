export default {
    
    //Acceso al canvas y context
    canvas: {},
    ctx: {},
    

    //Tiempo de ciclo anterior (milliseconds)
    previousCycleMilliseconds: -1,

    //Tiempo de ciclo de juego real (seconds)
    deltaTime: 0,
    cycleRealTime: 0,

    //Tiempo de ciclo objetivo (seconds, constante)
    frameTimeObj: 0,

    // Datos del nivel
    level: {},

};
