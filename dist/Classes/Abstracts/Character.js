"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Inventory_1 = require("./Inventory");
class Character extends Inventory_1.default {
    constructor(attributes) {
        super();
        this.attributes = Object.assign(Object.assign({}, attributes), { life: 10, totalLife: 10 });
    }
    getName() {
        return this.attributes.name;
    }
    getLife() {
        if (!this.attributes.totalLife)
            return 0;
        return Number(this.attributes.life / this.attributes.totalLife * 100);
    }
    decreaseLife(amount) {
        this.attributes.life -= amount;
        return this.attributes.life;
    }
    increaseLife(amount) {
        this.attributes.life += amount;
        return this.attributes.life;
    }
    setLifeInMax() {
        this.attributes.life = this.attributes.totalLife;
        return this.attributes.life;
    }
    isAlive() {
        return this.attributes.life > 0;
    }
    isDangerous() {
        return this.attributes.life < (this.attributes.totalLife / 2);
    }
}
exports.default = Character;
