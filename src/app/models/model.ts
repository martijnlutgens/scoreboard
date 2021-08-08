export interface Game {
    player1: Player;
    player2: Player;
}
export interface Player {
    score: number;
    sets: number;
}