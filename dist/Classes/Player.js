"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Character_1 = require("./Abstracts/Character");
const dices_1 = require("../Helpers/dices");
class Player extends Character_1.default {
    constructor(attributes, skills) {
        super(attributes);
        this.armor = 0;
        this.skills = skills;
        this.attributes = Object.assign(Object.assign({}, attributes), { life: this.getInitialLife(), totalLife: this.getInitialLife() });
        this.armor = this.getCalculatedArmor();
    }
    getExpecifiedSkill(skill) {
        return Math.floor((this.skills[skill] - 10) / 2);
    }
    getResumedSkills() {
        let skills = '';
        skills += `strength: ${this.skills.strength}, `;
        skills += `dexterity: ${this.skills.dexterity}, `;
        skills += `constitution: ${this.skills.constitution}, `;
        skills += `life: ${this.attributes.life}, `;
        skills += `armor: ${this.armor}`;
        return skills;
    }
    tryToHit(target) {
        const playerDexterity = this.getExpecifiedSkill('strength');
        const { value: playerHit } = dices_1.d20.roll(playerDexterity);
        return playerHit > target.armor;
    }
    attack() {
        return dices_1.d6.roll(this.getExpecifiedSkill('strength')).value;
    }
    heal() {
        if (this.removeInventory('Potion', 1)) {
            return dices_1.d6.roll(this.getExpecifiedSkill('wisdom')).value;
        }
        return 0;
    }
    getInitialLife() {
        return 10 + this.getExpecifiedSkill('constitution');
    }
    getCalculatedArmor() {
        return 10 + this.getExpecifiedSkill('dexterity');
    }
}
exports.default = Player;
