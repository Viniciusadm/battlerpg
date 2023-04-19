"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Dice {
    constructor(sides) {
        this.sides = sides;
    }
    roll(increments = [], min = undefined) {
        const dice = Math.floor(Math.random() * this.sides) + 1;
        const increment = Array.isArray(increments) ? increments.reduce((a, b) => a + b, 0) : increments;
        const result = dice + increment;
        return {
            value: min ? Math.max(result, min) : result,
            dice,
            increment,
        };
    }
}
exports.default = Dice;
