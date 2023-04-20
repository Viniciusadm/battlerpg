import Character from "./Abstracts/Character";
import { Spell } from "../Database/spells";
export type PlayerSkills = {
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
};
export default class Player extends Character {
    private readonly skills;
    private readonly spells;
    private readonly armor;
    private energy;
    constructor(attributes: {
        name: string;
    }, skills: PlayerSkills);
    getExpecifiedSkill(skill: keyof PlayerSkills): number;
    getResumedSkills(): string;
    tryToHit(target: Player): boolean;
    attack(): number;
    heal(): number;
    private getInitialLife;
    private getCalculatedArmor;
    private getCalculatedEnergy;
    addSpell(spell: Spell): void;
    private decreaseEnergy;
    useSpell(spell: Spell, resists: number): number | boolean;
    canSpell(spellName: string): boolean;
    getSpell(spellName: string): Spell | undefined;
    setEnergyInMax(): void;
    private getMyResist;
}
