import Character from "./Abstracts/Character";
import { d20, d6 } from "../Helpers/dices";
import Dice from "./Dice";
export default class Player extends Character {
    constructor(attributes, skills) {
        super(attributes);
        this.spells = [];
        this.armor = 0;
        this.energy = 0;
        this.skills = skills;
        this.attributes = Object.assign(Object.assign({}, attributes), { life: this.getInitialLife(), totalLife: this.getInitialLife() });
        this.armor = this.getCalculatedArmor();
        this.energy = this.getCalculatedEnergy();
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
        const { value: playerHit } = d20.roll(playerDexterity);
        return playerHit > target.armor;
    }
    attack() {
        return d6.roll(this.getExpecifiedSkill('strength')).value;
    }
    heal() {
        if (this.removeInventory('Potion', 1)) {
            return d6.roll(this.getExpecifiedSkill('wisdom')).value;
        }
        return 0;
    }
    getInitialLife() {
        return 10 + this.getExpecifiedSkill('constitution');
    }
    getCalculatedArmor() {
        return 10 + this.getExpecifiedSkill('dexterity');
    }
    getCalculatedEnergy() {
        return 20 + this.getExpecifiedSkill('intelligence') * 2;
    }
    addSpell(spell) {
        this.spells.push(spell);
    }
    decreaseEnergy(spell) {
        this.energy -= spell.energyCost;
    }
    useSpell(spell, resists) {
        if (spell && this.energy >= spell.energyCost) {
            this.decreaseEnergy(spell);
            if (resists > this.getMyResist()) {
                return false;
            }
            let total = 0;
            for (const dice of spell.dices) {
                const { value } = new Dice(dice).roll();
                total += value;
            }
            return total + this.getExpecifiedSkill('intelligence');
        }
        return 0;
    }
    canSpell(spellName) {
        const spell = this.getSpell(spellName);
        return spell && this.energy >= spell.energyCost;
    }
    getSpell(spellName) {
        return this.spells.find(spell => spell.name === spellName);
    }
    setEnergyInMax() {
        this.energy = this.getCalculatedEnergy();
    }
    getMyResist() {
        return 8 + this.getExpecifiedSkill('intelligence');
    }
}
