
/*  Combat
    player obj | player         -- Spelaren i encountern
    enemy obj  | enemy          -- Motståndare i encountern 
    int        | turn           -- 1 == "Spelaren" 0 == "Motståndaren"
*/

class Combat{
    constructor(player,enemy){
        this.player = player;
        this.enemy = enemy;
        this.turn = 1;
    }
}