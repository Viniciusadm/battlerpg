import Player from "./Player";
export default class Battle {
    private readonly player1;
    private readonly player2;
    constructor(player1: Player, player2: Player);
    getInitiative(): Player[];
}
