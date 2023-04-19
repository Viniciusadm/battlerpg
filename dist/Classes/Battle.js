"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dices_1 = require("../Helpers/dices");
class Battle {
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
        this.player1.setLifeInMax();
        this.player2.setLifeInMax();
    }
    getInitiative() {
        const order = [];
        order.push(dices_1.d20.roll(this.player1.getExpecifiedSkill('dexterity')).value);
        order.push(dices_1.d20.roll(this.player2.getExpecifiedSkill('dexterity')).value);
        if (order[0] > order[1]) {
            return [this.player1, this.player2];
        }
        else {
            return [this.player2, this.player1];
        }
    }
}
exports.default = Battle;
